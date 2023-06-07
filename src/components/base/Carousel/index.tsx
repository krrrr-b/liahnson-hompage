import React, {
  useRef,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from 'react';
import S from 'components/base/Carousel/styles';
import Button from '../Button';
import { BUTTON_COLORS } from '../Button/constants';
import { IconName } from 'assets/icons';
import Icon from '../Icon';
import MediaQueryContext from 'contexts/MediaQueryContext';

interface CarouselProps {
  children: ReactNode;
  style?: React.CSSProperties;
  isHideIndicators?: boolean;
  indicatorAccentColor?: string;
}

const Carousel = ({
  children,
  style,
  isHideIndicators,
  indicatorAccentColor,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [leftMargin, setLeftMargin] = useState(0);
  const [offset, setOffset] = useState(0);
  const [maxSlidingIndex, setMaxSlidingIndex] = useState(100);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touching, setTouching] = useState(false);
  const childrenCount = React.Children.count(children);
  const carouselItemsRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useContext(MediaQueryContext);
  const [count, setCount] = useState(30);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouching(true);
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
    setTouching(false);
    setOffset(0);
  };

  const handleSwipe = () => {
    if (offset < -20) {
      goToNextSlide();
    } else if (offset > 20) {
      goToPrevSlide();
    }
  };

  const handleResize = () => {
    setCurrentIndex(0);
    if (carouselItemsRef.current) {
      setSlideWidth(carouselItemsRef.current.clientWidth);
    }
  };

  const updateLeftMargin = () => {
    setLeftMargin((window.innerWidth - 1300) / 2);
  };

  const calculateMaxSlidingIndex = () => {
    const viewPortWidth = window.innerWidth * 0.75; // 현재 inner는 75%로 설정되어 있음

    if (carouselItemsRef.current) {
      const maxAvailableCount = Math.floor(
        viewPortWidth / carouselItemsRef.current.clientWidth,
      );
      setMaxSlidingIndex(childrenCount - maxAvailableCount);
    } else {
      const maxAvailableCount = Math.floor(viewPortWidth / slideWidth);
      setMaxSlidingIndex(childrenCount - maxAvailableCount);
    }
  };

  // 자동 스크롤 1.5s
  useEffect(() => {
    const id = setInterval(() => {
      // Our Strength 만 해당
      if (childrenCount == 3 || childrenCount == 4) {
        return
      }

      if (currentIndex < childrenCount - 1) {
        if (isMobile) {
          setCurrentIndex(currentIndex + 1);
        } else {
          if (currentIndex < maxSlidingIndex) {
            setCurrentIndex(currentIndex + 1);
          }
        }
      }

      setCount(count+1);
    }, 1500);
    
    if(currentIndex >= 4) {
      setCurrentIndex(0);
    }

    return () => clearInterval(id);
  }, [count]);

  useEffect(() => {
    handleResize();
    updateLeftMargin();
    calculateMaxSlidingIndex();

    window.addEventListener('resize', updateLeftMargin);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', updateLeftMargin);
    };
  }, []);

  const goToPrevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNextSlide = () => {
    if (currentIndex < childrenCount - 1) {
      if (isMobile) {
        setCurrentIndex(currentIndex + 1);
      } else {
        if (currentIndex < maxSlidingIndex) {
          setCurrentIndex(currentIndex + 1);
        }
      }
    }
  };

  return (
    <S.Wrapper
      margin={leftMargin}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}>
      <S.Carousel style={style}>
        <S.CarouselItems
          style={{
            transform: touching
              ? `translateX(${offset * 2.5 - currentIndex * slideWidth}px)`
              : `translateX(-${currentIndex * slideWidth}px)`,
          }}>
          {React.Children.map(children, (child, index) => (
            <S.CarouselItem ref={carouselItemsRef} key={index}>
              {child}
            </S.CarouselItem>
          ))}
        </S.CarouselItems>
        {currentIndex > 0 && (
          <S.carouselButtonLeft>
            <Button
              width='6.6rem'
              height='6.6rem'
              onClick={goToPrevSlide}
              color={BUTTON_COLORS.LIGHT_GREY}>
              <Icon
                name={IconName.ArrowLeft}
                size='37'
                color={BUTTON_COLORS.LIGHT_GREY}
              />
            </Button>
          </S.carouselButtonLeft>
        )}
        {currentIndex < childrenCount - 1 && (
          <S.carouselButtonRight margin={leftMargin}>
            <Button
              width='6.6rem'
              height='6.6rem'
              onClick={goToNextSlide}
              color={BUTTON_COLORS.LIGHT_GREY}>
              <Icon
                name={IconName.ArrowRight}
                size='37'
                color={BUTTON_COLORS.LIGHT_GREY}
              />
            </Button>
          </S.carouselButtonRight>
        )}
      </S.Carousel>
      {!isHideIndicators && (
        <S.Indicators>
          {React.Children.map(children, (_, index) => (
            <S.Indicator
              active={currentIndex === index}
              accentColor={indicatorAccentColor ? indicatorAccentColor : ''}
            />
          ))}
        </S.Indicators>
      )}
    </S.Wrapper>
  );
};

export default Carousel;
