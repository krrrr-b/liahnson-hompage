import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  display: none;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      display: block;
    }
  `}
`;

const Item = styled.div`
  padding: 2.9rem 0 4.6rem;
  border-top: 0.2rem solid var(--color-red-500);
`;

const Upper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6.1rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin-bottom: 0;
    }
  `}
`;

const TextWrapper = styled.div``;
const ScoreWrapper = styled.div`
  display: flex;
`;

const Score = styled.div`
  font-weight: 400;
  font-size: 55px;
  line-height: 40px;
`;

const Label = styled.div`
  padding-top: 1.8rem;
  font-weight: 400;
  font-size: 20px;
  line-height: 40px;
`;

const Description = styled.p<{ isOpen: boolean }>`
  overflow: hidden;
  font-weight: 400;
  font-size: 15px;
  line-height: 30px;
  max-height: ${({ isOpen }) => (isOpen ? '10rem' : '0')};
  transition: all 0.4s cubic-bezier(0.51, 0.01, 0, 0.99);
`;

export default {
  Upper,
  Wrapper,
  Item,
  ScoreWrapper,
  TextWrapper,
  Score,
  Label,
  Description,
};
