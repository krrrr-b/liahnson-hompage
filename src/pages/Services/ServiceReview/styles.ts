import styled, { css } from 'styled-components';

const Reviews = styled.section`
  padding: 13rem 0 13rem;
  background-color: var(--color-grey-000);

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding: 10rem 0 13rem;
    }
  `}
`;

const Title = styled.h3`
  margin-bottom: 0.4rem;
  font-weight: 590;
  font-size: 25px;
  line-height: 30px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      font-size: 15px;
      line-height: 18px;
    }
  `}
`;

const BottomWrapper = styled.div`
  display: flex;
  padding-top: 0rem;
  & > * {
    flex: 1;
  }
`;

const BottomDescriptionWrapper = styled.div``;

const BottomDescription = styled.p`
  margin-bottom: 6.1rem;
  font-size: 30px;
  line-height: 55px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin-bottom: 5rem;
      font-weight: 400;
      font-size: 15px;
      line-height: 30px;
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
      height: 50rem;
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

export default {
  Reviews,
  Title,
  BottomWrapper,
  BottomDescriptionWrapper,
  BottomDescription,
  CarouselDescription,
  CarouselItem,
  CarouselName,
  CarouselReference,
};
