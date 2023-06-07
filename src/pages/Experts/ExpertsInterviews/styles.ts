import styled, { css } from 'styled-components';

const Title = styled.h3`
  margin: 18.5rem 0 9.5rem;
  font-weight: 590;
  font-size: 25px;
  line-height: 30px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin: 0 0 4.5rem;
      font-weight: 590;
      font-size: 15px;
      line-height: 18px;
    }
  `}
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 683px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  font-size: 30px;

  & > * {
    flex: 1;
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      flex-direction: column;
      box-shadow: none;
    }
  `}
`;

const ImageContainer = styled.div`
  position: relative;
  height: 100%;

  & > img {
    width: 100%;
    height: 100%;
    z-index: 1;
    object-fit: cover;
  }
  &::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 50%,
      rgba(41, 41, 41, 0.5) 80%,
      rgba(41, 41, 41, 1) 100%
    );
    z-index: 2;
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      &::before {
        height: 0;
        width: 0;
      }
    }
  `}
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  background-color: var(--color-grey-800);
  color: var(--color-grey-000);
`;

const ReviewWrapper = styled.div`
  margin-right: 7.1rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 80%;
      padding: 3.8rem 2.8rem;
      background: var(--color-grey-000);
      border-radius: 2rem;
      color: var(--color-grey-800);
      transform: translate(-50%, -50%);
      font-weight: 400;
      font-size: 20px;
      line-height: 40px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  `}
`;

const Review = styled.p`
  max-width: 63rem;
  margin-bottom: 7.1rem;
  font-weight: 510;
  font-size: 25px;
  line-height: 50px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin-bottom: 6.4rem;
      height: 32rem;
      font-weight: 400;
      font-size: 20px;
      line-height: 40px;
      display: -webkit-box;
      -webkit-line-clamp: 8;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `}
`;

const Reference = styled.div`
  margin-bottom: 3.6rem;
  font-weight: 508;
  font-size: 20px;
  line-height: 40px;
  font-style: italic;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 30px;
    }
  `}
`;

const ReferenceAuthor = styled.p`
  font-weight: 700;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      font-style: normal;
      font-weight: 590;
      font-size: 18px;
      line-height: 30px;
    }
  `}
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  width: 100%;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      display: none;
      justify-content: center;
    }
  `}
`;

const Index = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 11rem;
  width: 100%;
  font-weight: 400;
  font-size: 25px;
  line-height: 100%;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      font-size: 1.5rem;
    }
  `}
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

const Indicator = styled.span<{ active: boolean }>`
  display: none;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${({ active }) =>
    active ? 'var(--color-grey-800)' : 'var(--color-black-030)'};

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      display: block;
    }
  `}
`;

export default {
  Index,
  Title,
  Container,
  ImageContainer,
  TextContainer,
  ButtonWrapper,
  ReviewWrapper,
  Review,
  Reference,
  ReferenceAuthor,
  Indicator,
  Indicators,
};
