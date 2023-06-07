import styled, { css } from 'styled-components';

const Description = styled.section`
  position: relative;
  background-color: var(--color-black-030);
  padding-top: 43.6rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding-top: 14.6rem;
    }
  `}
`;

const DescriptionImage = styled.img`
  position: absolute;
  top: -20rem;
  left: 29.35%;
  max-width: 1043.06px;
  height: 591.09px;
  border-radius: 300px 300.345px 300px 300px;
  object-fit: cover;
  left: 50%;
  transform: translate(-50%, 0);

  @media (max-width: 1340px) {
    top: -13rem;
    max-width: 60rem;
    height: auto;
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      top: -11rem;
      max-width: 32rem;
      height: auto;
      left: 54%;
      transform: translate(-50%, 0);
    }
  `}
`;

const Container = styled.div`
  position: relative;
  max-width: 173.3rem;
  width: 100%;
  height: 100%;
  margin: auto;
  padding-top: 15rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      max-width: 141.3rem;
      padding-top: 0rem;
    }
  `}
`;

const IntroductionWrapper = styled.div`
  display: flex;
  gap: 20.3rem;
  padding-top: 13rem;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      flex-direction: column;
      gap: 2.2rem;
      padding-top: 12.2rem;
    }
  `}
`;

const DescriptionTitle = styled.h4`
  font-weight: 590;
  font-size: 25px;
  line-height: 30px;
  white-space: nowrap;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      font-weight: 590;
      font-size: 30px;
      line-height: 36px;
    }
  `}
`;

const DescriptionContent = styled.p`
  font-weight: 400;
  font-size: 30px;
  line-height: 60px;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      font-weight: 400;
      font-size: 18px;
      line-height: 35px;
    }
  `}
`;

const LeftMargin = styled.div`
  margin-left: 33.6rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      margin: 0;
    }
  `}
`;

const RightMargin = styled.div`
  margin-right: 18.5rem;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      margin: 0;
    }
  `}
`;

const ImageWrapper = styled.div`
  display: flex;
  margin-top: 28.7rem;
  gap: 4rem;
  overflow: hidden;

  @media (max-width: 1550px) {
    display: none;
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      display: none;
      position: relative;
      bottom: -24rem;
      display: block;
      margin: -35rem 0 0;
    }
  `}
`;

const UpperImage = styled.img`
  max-width: 63rem;
  max-height: 71.6rem;
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  object-fit: cover;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      /* position: absolute;
      left: 40%;
      top: -15rem; */
      transform: translate(45%, 30%);
      margin: 0;
      max-width: 32.9rem;
      max-height: 34.1rem;
    }
  `}
`;

const LowerImage = styled.img`
  margin-top: 20.3rem;
  max-width: 73.1rem;
  max-height: 80.3rem;
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  object-fit: cover;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin: 0;
      max-width: 26.5rem;
      max-height: 27.5rem;
      transform: translateX(-20%);
    }
  `}
`;

const RightBottomMargin = styled(RightMargin)`
  padding-bottom: 65.1rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding-bottom: 14rem;
    }
  `}
`;

const BottomDescriptionImage = styled.img`
  position: absolute;
  bottom: -7.5%;
  left: 0;
  width: 100%;
  height: 760.01px;
  border-radius: 2rem;
  object-fit: cover;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      display: none;
    }
  `}
`;

export default {
  Description,
  Container,
  DescriptionImage,
  DescriptionTitle,
  IntroductionWrapper,
  DescriptionContent,
  LeftMargin,
  RightMargin,
  ImageWrapper,
  UpperImage,
  LowerImage,
  BottomDescriptionImage,
  RightBottomMargin,
};
