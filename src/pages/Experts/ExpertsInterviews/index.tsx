import { IconName } from 'assets/icons';
import Button from 'components/base/Button';
import { BUTTON_COLORS } from 'components/base/Button/constants';
import Icon from 'components/base/Icon';
import { Container, Inner } from 'components/shared';
import MediaQueryContext from 'contexts/MediaQueryContext';
import S from 'pages/Experts/ExpertsInterviews/styles';
import { useContext, useState } from 'react';
import expert_interview1 from 'assets/images/expert_interview_1.jpg';
import expert_interview2 from 'assets/images/expert_interview_2.jpg';
import expert_interview3 from 'assets/images/expert_interview_3.jpg';

export default function ExpertsInterviews(): ReturnType<React.FunctionComponent> {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isMobile } = useContext(MediaQueryContext);
  const [offset, setOffset] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // MouseEvent element 배경이미지 수정이 LIGHT_GREY 으로 되지 않아 임시 지정
  const rgba_of_light_grey = 'rgba(182,182,182,0.3)';

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1,
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
      <Container>
        <Inner>
          <S.Title>Experts Interviews</S.Title>
        </Inner>
      </Container>
      <S.Container
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}>
        <S.ImageContainer>
          <img src={data[currentIndex].image} alt='Display' />
        </S.ImageContainer>
        <S.TextContainer>
          <S.ReviewWrapper>
            <S.Review>{data[currentIndex].text}</S.Review>
            <S.Reference>
              <S.ReferenceAuthor>{data[currentIndex].author}</S.ReferenceAuthor>
              {data[currentIndex].team}
            </S.Reference>
            <S.ButtonWrapper>
              <Button
                width={isMobile ? '4.5rem' : '6.6rem'}
                height={isMobile ? '4.5rem' : '6.6rem'}
                onClick={handlePrev}
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut}
                color={BUTTON_COLORS.LIGHT_GREY}>
                <Icon
                  name={IconName.ArrowLeft}
                  size={isMobile ? '2.5rem' : '3.7rem'}
                  color={BUTTON_COLORS.LIGHT_GREY}
                />
              </Button>
              <S.Index>
                {currentIndex + 1}/{data.length}
              </S.Index>
              <Button
                width={isMobile ? '4.5rem' : '6.6rem'}
                height={isMobile ? '4.5rem' : '6.6rem'}
                onClick={handleNext}
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut}
                color={BUTTON_COLORS.LIGHT_GREY}>
                <Icon
                  name={IconName.ArrowRight}
                  size={isMobile ? '2.5rem' : '3.7rem'}
                  color={BUTTON_COLORS.LIGHT_GREY}
                />
              </Button>
            </S.ButtonWrapper>

            <S.Indicators>
              {data.map((item, index) => (
                <S.Indicator
                  key={item.text + index}
                  active={currentIndex === index}
                />
              ))}
            </S.Indicators>
          </S.ReviewWrapper>
        </S.TextContainer>
      </S.Container>
    </>
  );
}

const data = [
  {
    image: expert_interview1,
    text: `“I was working with Liahnson on a project for strategy consultation. I appreciated a lot the collaboration with Liahnson as they work very professionally and the entire execution of the project went very well.”`,
    author: '- Thomas Mittendrein',
    team: 'Strategic Marketing Leader, Performance Lubricants, Global Petrochemicals Company',
  },
  {
    image:
    expert_interview2,
    text: `“I truly enjoy working on project with Liahnson. They are a very professional group and do a terrific job in defining the scope and expectations of a project to assure a proper fit. Their preparation process is also one of the best in the industry, as are their completion and payment processes.”`,
    author: '- Michael Accavitti',
    team: 'Senior Vice President, Global Automotive Company',
  },
  {
    image:
    expert_interview3,
    text: `“Sincere! High efforts! This is my deepest feelings since my cooperation with Liahnson.”`,
    author: '- Liu Bo',
    team: 'Vice President Sales&Marketing Department, Global Automotive Company',
  },
];
