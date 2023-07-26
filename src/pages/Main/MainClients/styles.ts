import styled, { css } from 'styled-components';

const Wrapper = styled.section`
  padding: 15rem 0 13rem;
  background-color: var(--color-grey-800);
  color: var(--color-grey-000);

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding: 8.5rem 0 6.2rem;
    }
  `}
`;

const TitleWrapper = styled.div`
  display: flex;
  & > * {
    flex: 1;
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      flex-direction: column;
    }
  `}
`;

const Title = styled.div`
  font-weight: 590;
  font-size: 25px;
  line-height: 30px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin-bottom: 3rem;
      font-weight: 590;
      font-size: 15px;
      line-height: 18px;
    }
  `}
`;

const DescriptionWrapper = styled.div`
  padding-bottom: 7.3rem;
`;

const Description = styled.p`
  margin-bottom: 7.4rem;
  font-weight: 400;
  font-size: 30px;
  line-height: 55px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin-bottom: 4rem;
      font-size: 15px;
      line-height: 30px;
    }
  `}
`;

const BottomWrapper = styled.div`
  display: flex;
  & > * {
    flex: 1;
  }
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding-top: 4.2rem;
    }
  `}
`;

const BottomDescriptionWrapper = styled.div``;

const BottomDescription = styled.p`
  margin-bottom: 8.5rem;
  font-weight: 400;
  font-size: 30px;
  line-height: 55px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin-bottom: 4.2rem;
      font-size: 15px;
      line-height: 30px;
    }
  `}
`;

const ContentBox = styled.div`
  color: var(--color-grey-000);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 13.9rem 15rem 4rem 0rem;

  ${({ theme }) => css`
  @media (max-width: ${theme.breakpoints.medium}) {
    margin: 13.9rem 0rem 4rem 0rem;
  }
`}
`;

const Content = styled.div`
  padding-bottom: 16rem;
  width: 33%;

  &:nth-child(2), &:nth-child(5) {
    padding-left: 10%;
  }

  &:nth-child(3), &:nth-child(6) {
    padding-left: 20%;
  }

  span {
    color : #FF85A4;
  }

  img {
    width: 65px;
    height: 72px;
  }
  p {
    white-space: nowrap;
  }

  p:first-of-type {
    font-size: 92px;
  }

  p:last-of-type {
    font-size: 20px;
    line-height: 30px;
  }

  ${({ theme }) => css`
  @media (max-width: ${theme.breakpoints.medium}) {
    width: 50%;

    &:nth-child(2), &:nth-child(3), &:nth-child(5), &:nth-child(6) {
      padding-left: 5px;
    }

    p:first-of-type {
      font-size: 48px;
    }
  
      p:last-of-type {
        font-size: 12px;
        line-height: 30px;
        white-space: pre-wrap;
      }

    img {
      width: 20%;
    }
`}
`;
export default {
  Wrapper,
  TitleWrapper,
  Title,
  Description,
  BottomWrapper,
  BottomDescription,
  DescriptionWrapper,
  BottomDescriptionWrapper,
  ContentBox,
  Content
};
