import styled, { css } from 'styled-components';

const Wrapper = styled.div<{ margin: number }>`
  max-width: 100%;
  padding: 10rem 0;
  overflow: hidden;
  padding-left: ${props => props.margin}px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding: 3.8rem 0 3.8rem 3rem;
    }
  `}
`;

const Carousel = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 100%;
  overflow: visible;
  margin: 0 auto;
`;

const CarouselItems = styled.div`
  display: flex;
  gap: 5.1rem;
  transition: transform 0.3s ease;
  user-select: none;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      gap: 2rem;
    }
  `}
`;

const CarouselItem = styled.div`
  flex-shrink: 0;
`;

const CarouselButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  padding: 0.5rem;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      display: none;
    }
  `}
`;

const carouselButtonLeft = styled(CarouselButton)`
  left: 0;
`;

const carouselButtonRight = styled(CarouselButton)<{ margin: number }>`
  right: calc(${props => props.margin}px - 10vw);

  @media (max-width: 1550px) {
    right: calc(${props => props.margin}px);
  }

  @media (max-width: 1250px) {
    right: calc(${props => props.margin}px + 5vw);
  }

  @media (max-width: 1100px) {
    right: calc(${props => props.margin}px + 15vw);
  }

  @media (max-width: 1000px) {
    right: calc(${props => props.margin}px + 30vw);
  }
`;

const Indicators = styled.div`
  display: none;
  margin-top: 3.3rem;
  display: flex;
  justify-content: center;
  gap: 1.8rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      display: flex;
    }
  `}
`;

const Indicator = styled.span<{ active: boolean; accentColor: string }>`
  display: none;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${({ active, accentColor }) =>
    active
      ? accentColor
        ? accentColor
        : 'var(--color-red-500)'
      : 'var(--color-black-030)'};

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      display: block;
    }
  `}
`;

export default {
  Wrapper,
  Carousel,
  CarouselItems,
  CarouselButton,
  CarouselItem,
  carouselButtonRight,
  carouselButtonLeft,
  Indicators,
  Indicator,
};
