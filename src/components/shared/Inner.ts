import styled, { css } from 'styled-components';

const Inner = styled.div`
  position: relative;
  height: 100%;
  margin: 0 auto;
  width: 85%;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      width: 85%;
    }
  `}
`;

export default Inner;
