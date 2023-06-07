import styled, { css } from 'styled-components';
import i18n from "languages/i18n";

const isKorean = i18n.language === "ko";

const Strength = styled.section`
  position: relative;
  padding-bottom: 13.1rem;
  background-color: var(--color-black-030);

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding-bottom: 10.7rem;
    }
  `}
`;

const StrengthImage = styled.img`
  position: absolute;
  top: -20%;
  left: 29.35%;
  max-width: 1043.06px;
  height: 591.09px;
  border-radius: 300px 300.345px 300px 300px;
  object-fit: cover;

  @media (max-width: 1340px) {
    max-width: 60rem;
    height: auto;
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      top: -25%;
      max-width: 32rem;
      height: auto;
      left: 50%;
      transform: translate(-50%, 0);
    }
  `}
`;

const TitleContents = styled.p``;

const ArrowButtonWrapper = styled.div`
  padding: 74.2rem 0 13.8rem;
  display: flex;

  & > * {
    flex: 1;
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      position: relative;
      left:50%
      transform: translate(-50%, 0);
      padding: 19.7rem 0 14.9rem;
    }
  `}
`;

const StrengthWrapper = styled.div``;

const StrengthTitle = styled.h4`
  padding-bottom: 3.1rem;
  font-weight: 590;
  font-size: 25px;
  line-height: 30px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding: 0;
      font-size: 15px;
      line-height: 18px;
    }
  `}
`;

const StrengthDescription = styled.p``;

const StrengthBottomWrapper = styled.div`
  display: flex;
  padding-top: 5.8rem;
  & > * {
    flex: 1;
  }
`;

const StrengthBottomDescriptionWrapper = styled.div``;

const StrengthBottomDescription = styled.p`
  margin-bottom: 6.1rem;
  font-size: 30px;
  line-height: 55px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin-bottom: 4.2rem;
      font-weight: 400;
      font-size: 15px;
      line-height: 30px;
    }
  `}
`;

const CarouselItem = styled.div`
  width: 44rem;
  min-height: ${isKorean ? '63rem' : '90rem'};
  padding: 7.6rem 6.3rem;
  border-radius: 2rem;
  background-color: var(--color-grey-000);
  font-size: 2rem;
  box-shadow: var(--shadow-level-1);

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      width: 26rem;
      min-height: ${isKorean ? '39rem' : '57rem'};
      padding: 4.1rem 3.5rem;
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
  StrengthImage,
  StrengthWrapper,
  StrengthTitle,
  StrengthDescription,
  TitleContents,
  ArrowButtonWrapper,
  StrengthBottomWrapper,
  StrengthBottomDescriptionWrapper,
  StrengthBottomDescription,
  CarouselDescription,
  CarouselItem,
  CarouselTitle,
};
