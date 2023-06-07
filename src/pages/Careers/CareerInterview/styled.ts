import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  background-color: var(--color-black-030);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 13.7rem 0rem 0rem 0rem;
  overflow: hidden;
  margin-top: 15rem;

  & > * {
    flex: 1;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 8.2rem;

  & > img {
    width: 100%;
    width: 19rem;
    height: 19rem;
    z-index: 1;
    border-radius: 100%;
    object-fit: cover;
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin-bottom: 5.7rem;
      & > img {
        width: 9.5rem;
        height: 9.5rem;
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
  width: 80%;
`;

const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Review = styled.p`
  margin-bottom: 3.9rem;
  font-size: 2.4rem;
  work-break: keep-all;
  font-weight: 400;
  line-height: 50px;
  text-align: center;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin-bottom: 3.4rem;
      work-break: keep-all;
      font-size: 20px;
      line-height: 40px;
    }
  `}
`;

const Reference = styled.div`
  margin-bottom: 5.8rem;
  font-weight: 590;
  font-size: 25px;
  line-height: 95px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin-bottom: 4.5rem;
      font-size: 20px;
      line-height: 45px;
    }
  `}
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  width: 100%;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      display: none;
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
`;

const imageWrapper = styled.div`
  background-color: var(--color-grey-800);
  width: 100%;
`;

const Image = styled.img`
  object-fit: cover;
  position: relative;
  left: 50%;
  height: 138rem;
  transform: translate(-50%, 0);

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      height: 30rem;
    }
  `}
`;

const Video = styled.video`
  object-fit: cover;
  position: relative;
  left: 50%;
  height: 108rem;
  transform: translate(-50%, 0);
  width: 100%;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      height: 30rem;
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
  Wrapper,
  Index,
  Container,
  ImageContainer,
  TextContainer,
  ButtonWrapper,
  ReviewWrapper,
  Review,
  Reference,
  Image,
  Video,
  Indicators,
  Indicator,
  imageWrapper,
};
