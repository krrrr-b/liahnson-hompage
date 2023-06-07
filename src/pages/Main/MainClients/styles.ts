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

export default {
  Wrapper,
  TitleWrapper,
  Title,
  Description,
  BottomWrapper,
  BottomDescription,
  DescriptionWrapper,
  BottomDescriptionWrapper,
};
