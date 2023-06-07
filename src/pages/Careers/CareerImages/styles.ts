import styled, { css } from 'styled-components';
import theme from 'styles/theme';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 4.2rem;
  width: 100%;
  height: 100%;
  margin-top: 20rem;

  @media (max-width: 1385px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 10rem 0 11.4rem;
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      gap: 4.6rem;
    }
  `}
`;

const Image1 = styled.div`
  grid-column: 1;
  grid-row: 1;
  width: 100%;
  height: 100%;
`;

const Image2 = styled.div`
  grid-column: 2;
  grid-row: 1;
  width: 100%;
  height: 100%;
`;

const Image3 = styled.div`
  grid-column: 1 / span 2;
  grid-row: 2;
  width: 100%;
  height: 100%;
  margin-top: 0rem;

  ${({ theme }) => css`
  @media (max-width: ${theme.breakpoints.medium}) {
    margin-top: 0rem;
  }
`}
`;

export default { GridContainer, Image1, Image2, Image3 };
