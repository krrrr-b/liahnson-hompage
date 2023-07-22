import { Container, Inner } from 'components/shared';
import { useState } from 'react';
import S from 'pages/Careers/CareerInterview/styled';
import Button from 'components/base/Button';
import { BUTTON_COLORS } from 'components/base/Button/constants';
import Icon from 'components/base/Icon';
import { IconName } from 'assets/icons';
import careerVideo from 'assets/images/career.mov';
import i18n from "languages/i18n";

// MouseEvent element 배경이미지 수정이 LIGHT_GREY 으로 되지 않아 임시 지정
const rgba_of_light_grey = 'rgba(182,182,182,0.3)';
const isKorean = i18n.language === "ko";
const data = [
  {
    image:
      'https://images.unsplash.com/photo-1603796846097-bee99e4a601f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    text: isKorean ? '수평적인 조직문화, 개인 역량에 따른 확실한 성과급 제도는 이안손앤컴퍼니가 제공하는 가장 기본적인 근로자 권리입니다. 고객사와 전문가 사이에서 다양한 산업의 정보를 관장함으로써 4차 산업혁명 시대가 원하는 제너럴리스트가 될 수 있는 기회, 이안손앤컴퍼니가 제공합니다' : '“A horizontal organizational culture and a clear incentive system based on individual capabilities are the most basic worker rights provided by Liahnson & Company. Liahnson & Company provides an opportunity to become a generalist desired in the era of the 4th Industrial Revolution by managing information in various industries between clients and experts.”',
    reviewer: isKorean ?'김성훈 프로젝트 매니저' : 'Peter Kim | Project Manager',
  },
];

export default function CareerInterview(): ReturnType<React.FunctionComponent> {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1,
    );
  };

  const onMouseOver = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button: HTMLButtonElement = event.currentTarget;
    button.style.backgroundColor = BUTTON_COLORS.BLACK;
  };

  const onMouseOut = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button: HTMLButtonElement = event.currentTarget;
    button.style.backgroundColor = rgba_of_light_grey;
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX !== null) {
      const deltaX = e.touches[0].clientX - touchStartX;
      setOffset(deltaX);
    }
  };

  const handleTouchEnd = () => {
    handleSwipe();
    setTouchStartX(null);
    setOffset(0);
  };

  const handleSwipe = () => {
    if (offset < -20) {
      handleNext();
    } else if (offset > 20) {
      handlePrev();
    }
  };

  return (
    <>
      <S.Wrapper>
        <Container>
          <Inner>
            <S.Container
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}>
              <S.ImageContainer style={{wordBreak: 'keep-all'}}>
                <img src={data[currentIndex].image} alt='Display' />
              </S.ImageContainer>
              <S.TextContainer>
                <S.ReviewWrapper>
                  <S.Review style={{wordBreak: 'keep-all'}}>{data[currentIndex].text}</S.Review>
                  <S.Reference style={{wordBreak: 'keep-all'}}>{data[currentIndex].reviewer}</S.Reference>
                  {/* <S.ButtonWrapper>
                    <Button
                      width='6.6rem'
                      height='6.6rem'
                      onClick={handlePrev}
                      onMouseOver={onMouseOver}
                      onMouseOut={onMouseOut}
                      color={BUTTON_COLORS.LIGHT_GREY}>
                      <Icon
                        name={IconName.ArrowLeft}
                        size='37'
                        color={BUTTON_COLORS.LIGHT_GREY}
                      />
                    </Button>
                    <S.Index>
                      {currentIndex + 1}/{data.length}
                    </S.Index>
                    <Button
                      width='6.6rem'
                      height='6.6rem'
                      onClick={handleNext}
                      onMouseOver={onMouseOver}
                      onMouseOut={onMouseOut}
                      color={BUTTON_COLORS.LIGHT_GREY}>
                      <Icon
                        name={IconName.ArrowRight}
                        size='37'
                        color={BUTTON_COLORS.LIGHT_GREY}
                      />
                    </Button>
                  </S.ButtonWrapper> */}

                  {/* <S.Indicators>
                    {data.map((item, index) => (
                      <S.Indicator
                        key={item.reviewer + index}
                        active={currentIndex === index}
                      />
                    ))}
                  </S.Indicators> */}
                </S.ReviewWrapper>
              </S.TextContainer>
            </S.Container>
          </Inner>
        </Container>
      </S.Wrapper>
      <S.imageWrapper>
        <S.Video src={careerVideo} autoPlay={true} loop muted />
      </S.imageWrapper>
    </>
  );
}
