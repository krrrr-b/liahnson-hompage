import styled, { css } from 'styled-components';

const Review = styled.section`
  padding-bottom: 13.2rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding-bottom: 13.3rem;
    }
  `}
`;

const Title = styled.h3`
  margin-bottom: 6.4rem;
  font-weight: 590;
  font-size: 2.5rem;
  line-height: 3rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin-bottom: 4.5rem;
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
  height: 883px;
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
  height: 100%;
  background-color: var(--color-grey-800);
  color: var(--color-grey-000);
`;

const TextContainerTitle = styled.div`
  max-width: 63rem;
  font-weight: 400;
  font-size: 25px;
  line-height: 55px;

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

const TextContainerTitleText = styled.p`
  margin-bottom: 6.3rem;
  padding-right: 1rem;
  max-height: 32rem;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;

  ${({ theme }) => css`
  @media (max-width: ${theme.breakpoints.medium}) {
    margin-bottom: 14.3rem;
  }
`}
`;

const TextContainerAuthor = styled.p`
  font-style: italic;
  font-weight: 508;
  font-size: 25px;
  line-height: 55px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      font-weight: 590;
      font-size: 18px;
      line-height: 40px;
    }
  `}
`;

const DescriptionWrapper = styled.div`
  display: flex;
  margin-top: 18rem;

  & > * {
    flex: 1;
  }
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin: 0;
    }
  `}
`;

const Description = styled.p`
  margin-bottom: 7.3rem;
  font-size: 3rem;
  line-height: 5.5rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin: -9.1rem 0 4.9rem;
      font-weight: 400;
      font-size: 15px;
      line-height: 30px;
    }
  `}
`;

export default {
  Review,
  Title,
  DescriptionWrapper,
  Description,
  Container,
  ImageContainer,
  TextContainer,
  TextContainerTitle,
  TextContainerAuthor,
  TextContainerTitleText,
};
