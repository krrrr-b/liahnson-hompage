import styled, { css } from 'styled-components';

const Strength = styled.section`
  position: relative;
  padding: 13rem 0 8rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding: 10.1rem 0 6.3rem;
    }
  `}
`;

const Title = styled.h3`
  margin-bottom: 3.1rem;
  font-weight: 590;
  font-size: 25px;
  line-height: 30px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin-bottom: 0;
      font-weight: 590;
      font-size: 15px;
      line-height: 18px;
    }
  `}
`;

const CarouselItem = styled.div`
  width: 44rem;
  min-height: 62rem;
  padding: 7.6rem 6.3rem;
  border-radius: 2rem;
  font-size: 2rem;
  box-shadow: var(--shadow-level-1);

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding: 4.1rem 3.5rem;
      width: 26rem;
      min-height: 39rem;
    }
  `}
`;

const CarouselTitle = styled.p`
  color: var(--color-red-500);
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin-bottom: 2rem;
      font-size: 25px;
      line-height: 30px;
    }
  `}
`;

const CarouselDescription = styled.p`
  font-weight: 400;
  font-size: 25px;
  line-height: 50px;
  margin-top: 30px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      font-size: 15px;
      line-height: 30px;
    }
  `}
`;

export default {
  Strength,
  Title,
  CarouselItem,
  CarouselTitle,
  CarouselDescription,
};
