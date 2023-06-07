import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  padding: 13rem 0;
  margin-bottom: -45rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding: 9.5rem 0;
      margin-bottom: 0rem;
    }
  `}
`;

const Title = styled.h3`
  margin-bottom: 3.2rem;
  font-weight: 590;
  font-size: 25px;
  line-height: 30px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin-bottom: 2.7rem;
      font-size: 15px;
      line-height: 18px;
    }
  `}
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 30px;
  line-height: 50px;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin-bottom: 10.2rem;
      font-size: 20px;
      line-height: 35px;
    }
  `}
`;

export default { Wrapper, Title, Description };
