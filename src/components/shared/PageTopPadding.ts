import styled, { css } from 'styled-components';

const PageTopPadding = styled.section`
  padding-top: 13.9rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding-top: 8.4rem;
    }
  `}
`;

export default PageTopPadding;
