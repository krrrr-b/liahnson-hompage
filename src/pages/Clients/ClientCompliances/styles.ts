import styled, { css } from 'styled-components';

const Compliance = styled.section`
  padding: 13.6rem 0;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding: 17.3rem 0;
    }
  `}
`;

const Wrapper = styled.div`
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

const Title = styled.h3`
  font-weight: 590;
  font-size: 2.5rem;
  line-height: 3rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      font-size: 15px;
      line-height: 18px;
      margin-bottom: 4rem;
    }
  `}
`;

const Description = styled.p`
  font-size: 3rem;
  line-height: 6rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      font-weight: 400;
      font-size: 20px;
      line-height: 40px;
    }
  `}
`;

export default { Compliance, Wrapper, Title, Description };
