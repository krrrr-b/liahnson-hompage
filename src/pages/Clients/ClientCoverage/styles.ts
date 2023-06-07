import styled, { css } from 'styled-components';

const Coverage = styled.section`
  background-color: var(--color-black-010);
`;

const Title = styled.h3`
  padding-top: 13.2rem;
  margin-bottom: 2rem;
  font-weight: 590;
  font-size: 2.5rem;
  line-height: 3rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding: 9.3rem 0 2.9rem;
      font-size: 15px;
      line-height: 18px;
    }
  `}
`;

const Description = styled.p`
  margin-bottom: 11.4rem;
  font-weight: 400;
  font-size: 3rem;
  line-height: 6rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin-bottom: 10.6rem;
      font-size: 20px;
      line-height: 35px;
    }
  `}
`;

export default { Coverage, Title, Description };
