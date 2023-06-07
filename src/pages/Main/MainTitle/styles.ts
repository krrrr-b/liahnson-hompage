import styled, { css, keyframes } from 'styled-components';
import PageTopPadding from 'components/shared/PageTopPadding';

const Title = styled(PageTopPadding)`
  position: relative;
`;

const Header = styled.div`
  position: relative;
  padding: 11.8rem 0 16.6rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding: 8.3rem 0 11rem;
    }
  `}
`;

const DescriptionHover1 = styled.span`
  color: var(--color-grey-800);
  font-weight: 500;
  font-size: 80px;
  line-height: 95px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      font-weight: 700;
      font-size: 40px;
      line-height: 50px;
    }
  `}
`;

const DescriptionHover = styled(DescriptionHover1)``;

const HeaderDescription = styled.p`
  padding-bottom: 6.67rem;
  font-size: 8rem;
  font-weight: 510;
  line-height: 9rem;

  & {
    ${DescriptionHover} {
      color: var(--color-red-100);
    }
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding-bottom: 3.9rem;
      font-weight: 700;
      font-size: 35px;
      line-height: 45px;
    }
  `}
`;

const HeaderButtonBox = styled.div`
  display: flex;
  gap: 1.5rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      flex-direction: column;
      gap: 1.3rem;
    }
  `}
`;

const equallyBound = keyframes`
    0% {
    top: 0;
  }

  50% {
    top: 0.5rem;
  }

  100% {
    top: 0;
  }
`;

const lineMove = keyframes`
    0% {
    height: 0;
    bottom: -1.5rem;
  }

  15% {
    height: 12px;
    bottom: -3.1rem;
  }

  50% {
    height: 80px;
    bottom: -11.7rem;
  }

  85% {
    height: 12px;
    bottom: -15rem;
  }

  100% {
    height: 0;
    bottom: -16.5rem;
  }
`;

const ScrollWrapper = styled.div`
  position: absolute;
  width: 5.2rem;
  height: 19.4rem;
  bottom: -10rem;
  left: 50%;
  transform: translateX(-50%);

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      transform: translateX(250%);
    }
  `}

  @media (max-width: 400px) {
    transform: translateX(180%);
  }
`;

const ScrollAnimation = styled.span`
  position: absolute;
  top: 0;
  color: var(--color-grey-800);
  font-size: 2rem;

  animation: ${equallyBound} 1.4s ease infinite;

  &::after {
    content: '';
    position: absolute;
    display: inline-block;
    width: 1px;
    height: 15.8rem;
    background-color: var(--color-grey-800);
    left: 50%;
    bottom: -16.5rem;

    animation: ${lineMove} 0.9s ease-in-out infinite;
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      font-weight: 510;
      font-size: 10px;
      line-height: 12px;
    }
  `}
`;

const ImageBox = styled.div``;

const TitleImage = styled.img`
  width: 100vw;
  height: 107.3rem;
  object-fit: cover;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      height: 38.5rem;
    }
  `};
`;

const TitleVideo = styled.video`
  width: 100%;
  height: 87.3rem;
  object-fit: cover;
  margin-bottom: -5px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      height: 38.5rem;
    }
  `};
`;

const Description = styled.div`
  padding: 14rem 0;
  background-color: var(--color-red-500);

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding: 7.9rem 0;
    }
  `}
`;

const DescriptionTitle = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1rem;
  color: var(--color-grey-000);
  font-weight: 510;
  font-size: 40px;
  line-height: 68px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      font-weight: 500;
      font-size: 25px;
      line-height: 40px;
    }
  `}
`;

const DescriptionContents = styled.p`
  padding: 4rem 0 4rem;
  color: var(--color-grey-000);
  font-size: 25px;
  line-height: 48px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding: 7rem 0 3.5rem;
      font-weight: 400;
      font-size: 15px;
      line-height: 30px;
    }
  `}
`;

const DescriptionButtonBox = styled.div``;

export default {
  Title,
  Header,
  HeaderDescription,
  DescriptionHover,
  HeaderButtonBox,
  ScrollWrapper,
  ScrollAnimation,
  ImageBox,
  TitleImage,
  TitleVideo,
  Description,
  DescriptionTitle,
  DescriptionContents,
  DescriptionButtonBox,
};
