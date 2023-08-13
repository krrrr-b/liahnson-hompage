import styled, { css } from 'styled-components';

const Container = styled.div`
  position: relative;
  max-width: 173.3rem;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  margin: auto;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      max-width: 141.3rem;
    }
  `}
`;

export default Container;
