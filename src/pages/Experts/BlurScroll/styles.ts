import styled, { css } from 'styled-components';

const OuterWrapper = styled.div`
  padding: 5rem 0 13rem 0;
  background-color: var(--color-red-500);

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding: 7.5rem 0 6.8rem;
    }
  `}
`;

const BlurScroll = styled.section`
  position: relative;
  // height: 70.6rem;
  color: var(--color-grey-000);

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      height: initial;
    }
  `}
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;

  & > * {
    flex: 1;
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      flex-direction: column;
    }
  `}
`;

const LeftContainer = styled.div`
  position: relative;
`;

const MovingWordWrapper = styled.div`
  top: 30%;
  margin-top: 17.2rem;
  height: min-content;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin-top: 2.2rem;
    }
  `}
`;

const LeftTextTitle = styled.div`
  margin-bottom: 6.8rem;
  font-weight: 510;
  font-size: 20px;
  line-height: 30px;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin-bottom: 3.8rem;
    }
  `}
`;

const LeftText = styled.div`
  font-weight: 710;
  font-size: 60px;
  line-height: 60px;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      font-weight: 400;
      font-size: 35px;
      line-height: 45px;
    }
  `}
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  & > :not(:last-child) {
    padding-bottom: 5.8rem;
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      display: none;
    }
  `}
`;

const RightParagraph = styled.div`
  font-weight: 410;
  font-size: 2.5rem;
  line-height: 7rem;
`;

const CarouselItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6.1rem;
  width: 25.4rem;
  min-height: 22rem;
`;

const CarouselIconWrapper = styled.div`
  padding-bottom: 1rem;
  work-break: keep-all;
  width: 25rem;
  border-bottom: 0.2rem solid var(--color-red-100);
`;
const CarouselItemContent = styled.div`
  padding-top: 2.25rem;
  work-break: keep-all;
  color: var(--color-grey-000);
  font-weight: 400;
  font-size: 20px;
  line-height: 35px;
`;
export default {
  OuterWrapper,
  BlurScroll,
  Wrapper,
  LeftTextTitle,
  LeftContainer,
  LeftText,
  RightContainer,
  RightParagraph,
  CarouselItem,
  MovingWordWrapper,
  CarouselItemContent,
  CarouselIconWrapper,
};
