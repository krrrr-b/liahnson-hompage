import styled, { css } from 'styled-components';

export const Review = styled.section`
  position: relative;
  padding: 13rem 0 13rem;
  background-color: var(--color-black-010);

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding: 7.6rem 0 9.6rem;
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
      margin-bottom: 0.3rem;
      font-weight: 590;
      font-size: 15px;
      line-height: 18px;
    }
  `}
`;

const CarouselItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 52rem;
  height: 71rem;
  padding: 6.5rem 5.1rem 6.8rem;
  border: 0.15rem solid var(--color-red-500);
  border-radius: 2rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding: 4.8rem 3.4rem;
      width: 33rem;
      height: 60rem;
    }
  `}
`;

const CarouselDescription = styled.p`
  font-weight: 510;
  font-size: 2.5rem;
  line-height: 4.5rem;
  color: var(--color-red-500);

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      font-weight: 510;
      font-size: 18px;
      line-height: 30px;
    }
  `}
`;

const CarouselReference = styled.p`
  font-size: 2rem;
  line-height: 3.5rem;
  color: var(--color-red-500);

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      font-weight: 400;
      font-size: 15px;
      line-height: 25px;
    }
  `}
`;

const CarouselName = styled(CarouselDescription)`
  margin-bottom: 0rem;
  line-height: 4rem;
  font-style: italic;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      font-weight: 590;
      font-size: 15px;
      line-height: 30px;
      margin-top: 20px;
    }
  `}
`;

const DescriptionBox = styled.div`
  display: flex;
  padding: 3.7rem 0 0;

  & > * {
    flex: 1;
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding: 12rem 0 0;
    }
  `}
`;

const DescriptionContentWrapper = styled.div`
  font-weight: 400;
  font-size: 30px;
  line-height: 55px;
`;

const DescriptionContent = styled.p`
  margin-bottom: 8.3rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin-bottom: 5rem;
      font-weight: 400;
      font-size: 15px;
      line-height: 30px;
    }
  `}
`;

export default {
  Review,
  Title,
  CarouselItem,
  CarouselDescription,
  CarouselName,
  DescriptionBox,
  DescriptionContentWrapper,
  DescriptionContent,
  CarouselReference,
};
