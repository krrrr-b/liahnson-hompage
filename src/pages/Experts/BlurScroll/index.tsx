import { useContext, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import S from 'pages/Experts/BlurScroll/styles';
import { Container, Inner } from 'components/shared';
import MediaQueryContext from 'contexts/MediaQueryContext';
import Carousel from 'components/base/Carousel';
import Icon from 'components/base/Icon';
import { IconName } from 'assets/icons';
import { useTranslation } from "react-i18next";
import i18n from "i18next";

gsap.registerPlugin(ScrollTrigger);

export default function BlurScroll(): ReturnType<React.FunctionComponent> {
  const [blurAmounts, setBlurAmounts] = useState<number[]>([5, 5, 5]);
  const [scrollBlocked, setScrollBlocked] = useState(false);

  const paragraph1Ref = useRef<null | HTMLDivElement>(null);
  const paragraph2Ref = useRef<null | HTMLDivElement>(null);
  const paragraph3Ref = useRef<null | HTMLDivElement>(null);
  const outerRef = useRef<null | HTMLDivElement>(null);
  const leftTextRef = useRef<HTMLDivElement | null>(null);
  const { isMobile } = useContext(MediaQueryContext);
  const { t } = useTranslation()

  useEffect(() => {
    if (!isMobile) {
      gsap.registerPlugin(ScrollTrigger);

      const updateBlur = (progress: number) => {
        if (progress < 0.33) {
          setBlurAmounts([0, 5, 5]);
        } else if (progress < 0.66) {
          setBlurAmounts([5, 0, 5]);
        } else {
          setBlurAmounts([5, 5, 0]);
        }
      };

      const lockScroll = (isActive: boolean) => {
        setScrollBlocked(isActive && !isMobile);
      };

      const scrollTrigger = ScrollTrigger.create({
        trigger: outerRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        onEnter: () => {
          lockScroll(true);
        },
        onLeaveBack: () => {
          lockScroll(false);
        },
        onUpdate: self => {
          if (self.progress >= 0.99) {
            lockScroll(false);
          } else {
            updateBlur(self.progress);
          }
        },
      });

      return () => {
        scrollTrigger.kill();
      };
    }
  }, []);

  const carouselItems = [
    {
      content: t('A1'),
    },
    { content: t('A2') },
    {
      content: t('A3'),
    },
    {
      content:
      t('A3'),
    },
  ];

  return (
    <S.OuterWrapper
      style={{
        position: isMobile || !scrollBlocked ? 'relative' : 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 100,
      }}>
      <S.BlurScroll ref={outerRef}>
        <Container>
          <Inner>
            <S.Wrapper>
              <S.LeftContainer>
                <S.MovingWordWrapper ref={leftTextRef}>
                  <S.LeftTextTitle>Advantages</S.LeftTextTitle>
                  <S.LeftText>{i18n.language === "ko" ? '이안손에서는' : 'in Liahnson we' }</S.LeftText>
                </S.MovingWordWrapper>
              </S.LeftContainer>
              <S.RightContainer style={{wordBreak: 'keep-all'}}>
                <S.RightParagraph
                  ref={paragraph1Ref}
                  className='right-paragraph'
                  style={{ filter: `blur(${blurAmounts[0]}px)`, wordBreak: 'keep-all' }}>
                  {t('A1')}
                </S.RightParagraph>
                <S.RightParagraph
                  ref={paragraph2Ref}
                  className='right-paragraph'
                  style={{ filter: `blur(${blurAmounts[1]}px)`, wordBreak: 'keep-all' }}>
                  {t('A2')}
                </S.RightParagraph>
                <S.RightParagraph
                  ref={paragraph3Ref}
                  className='right-paragraph'
                  style={{ filter: `blur(${blurAmounts[2]}px)`, wordBreak: 'keep-all' }}>
                  {t('A3')}
                </S.RightParagraph>
              </S.RightContainer>
            </S.Wrapper>
          </Inner>
        </Container>
        {isMobile && (
          <Carousel indicatorAccentColor='var(--color-grey-000)'>
            {carouselItems.map((item, index) => (
              <S.CarouselItem style={{wordBreak: 'keep-all'}} key={item.content + index}>
                <S.CarouselIconWrapper>
                  <Icon
                    name={IconName.Plus}
                    color={'var(--color-red-100)'}
                    width='2.2rem'
                    height='5rem'
                  />
                </S.CarouselIconWrapper>
                <S.CarouselItemContent>{item.content}</S.CarouselItemContent>
              </S.CarouselItem>
            ))}
          </Carousel>
        )}
      </S.BlurScroll>
    </S.OuterWrapper>
  );
}
