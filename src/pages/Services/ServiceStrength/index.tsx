import BackgroundText from 'components/base/BackgroundText';
import ArrowButton from 'components/base/Button/ArrowButton';
import { BUTTON_COLORS } from 'components/base/Button/constants';
import Carousel from 'components/base/Carousel';
import { Container, Inner } from 'components/shared';
import MediaQueryContext from 'contexts/MediaQueryContext';
import S from 'pages/Services/ServiceStrength/styles';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LINKS } from 'components/base/Link/constants';
import { useTranslation } from "react-i18next";
import service_shot from 'assets/images/service_shot.jpg';

export default function ServiceStrength(): ReturnType<React.FunctionComponent> {
  const { isMobile } = useContext(MediaQueryContext);
  const navigate = useNavigate();
  const { t } = useTranslation()

  const routeChange = (path: string) =>{ 
    navigate(path);
  }

  const CarouselItems = [
    {
      title: 'Quantity',
      content:
        t('strength_quantity'),
    },
    {
      title: 'Quality',
      content:
        t('strength_quality'),
    },
    {
      title: 'Rapidity',
      content: t('strength_rapidity'),
    },
    {
      title: 'Flexibility',
      content: t('strength_flexibility'),
    },
    {
      title: 'Reliability',
      content: t('strength_reliability'),
    },
    {
      title: 'Capability',
      content: t('strength_capability'),
    },
  ];

  return (
    <S.Strength>
      <BackgroundText
        upper='Unlock the'
        lower='power of knowledge'
        color='var(--color-grey-000)'
      />
      <Container>
        <Inner>
          <S.StrengthImage src={service_shot} />
          <S.ArrowButtonWrapper>
            <div></div>
            <ArrowButton
              color={BUTTON_COLORS.BLACK}
              name='What we do'
              onClick={() => {
                routeChange(LINKS.ABOUT)
              }}
            />
            {isMobile && <div></div>}
          </S.ArrowButtonWrapper>
          <S.StrengthTitle>Our Strengths</S.StrengthTitle>
        </Inner>
      </Container>
      <Carousel isHideIndicators>
        {CarouselItems.map(item => (
          <S.CarouselItem key={item.title}>
            <S.CarouselTitle style={{wordBreak: 'keep-all'}}>{item.title}</S.CarouselTitle>
            <S.CarouselDescription style={{wordBreak: 'keep-all'}}>{item.content}</S.CarouselDescription>
          </S.CarouselItem>
        ))}
      </Carousel>
      <Container>
        <Inner>
          <S.StrengthBottomWrapper>
            {!isMobile && <div></div>}
            <S.StrengthBottomDescriptionWrapper>
              <S.StrengthBottomDescription style={{wordBreak: 'keep-all'}}>
                {t('become_our_service_title')}
              </S.StrengthBottomDescription>
              <ArrowButton
                name='Become our Client'
                color={BUTTON_COLORS.RED}
                onClick={() => {
                  if (isMobile) {
                    window.location.href = LINKS.TYPE_FORM_CLIENTS;
                  } else {
                    window.open(LINKS.TYPE_FORM_CLIENTS, "_blank", "width=1024, height=720; noopener, noreferrer");
                  }
                }}
              />
            </S.StrengthBottomDescriptionWrapper>
          </S.StrengthBottomWrapper>
        </Inner>
      </Container>
    </S.Strength>
  );
}
