import styled, { css } from 'styled-components';

const Box = styled.div<{ isSelected: boolean; isAtTop: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30rem;
  height: 31.4rem;
  border-radius: 2rem;
  box-shadow: var(--shadow-level-3);
  transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
  background-color: ${({ isSelected }) =>
    isSelected ? 'var(--color-grey-300)' : 'var(--color-grey-800)'};
  filter: ${({ isSelected }) => (isSelected ? 'grayscale(0)' : 'grayscale(1)')};

  ${({ isAtTop }) =>
    isAtTop &&
    css`
      height: 0;
      & > * {
        display: none;
      }
    `};

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      display: none;
    }
  `}
`;

const Title = styled.p<{
  isAtTop: boolean;
  isServiceTitleVisible: boolean;
  isHover: boolean;
  isSelected: boolean;
}>`
  position: relative;
  padding: 2.2rem 0;
  width: 31.5rem;
  font-weight: 510;
  font-size: 3rem;
  line-height: 3.6rem;
  color: var(--color-grey-000);
  transition: opacity 1.1s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition-delay: 0.15s;
  opacity: ${({ isSelected }) => (isSelected ? '1' : '0.6')};
  cursor: pointer;
  overflow: hidden;

  ${({ isAtTop }) =>
    isAtTop &&
    css`
      position: relative;
      top: 0;
    `};

  ${({ isServiceTitleVisible }) =>
    !isServiceTitleVisible &&
    css`
      position: relative !important;
    `};

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.1rem;
    background-color: var(--color-grey-000);
    transition: transform 0.8s cubic-bezier(0.65, 0, 0.35, 1);
  }

  &::before {
    transform: translate3d(-100%, 0, 0);
    ${({ isHover }) =>
      isHover
        ? css`
            transition-delay: 0.1s;
          `
        : css`
            transition-delay: -0.1s;
          `}
  }

  ${({ theme, isAtTop }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      position: relative !important;
    }
  `}
`;

const Wrapper = styled.a<{ isHover: boolean; isSelected: boolean }>`
  width: 31.5rem;

  transition: opacity 1.1s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition-delay: 0.15s;
  opacity: ${({ isSelected }) => (isSelected ? '1' : '0.6')};
  cursor: pointer;

  &:hover {
    opacity: 1;

    ${Title} {
      opacity: 1;

      &::before {
        transition-delay: 0.1s;
        transform: translate3d(0, 0, 0);
      }

      &::after {
        transform: translate3d(100%, 0, 0);
      }
    }

    ${Box} {
      filter: grayscale(0);
      background-color: var(--color-grey-300);
      transition: all 0.7s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
  }
`;

export default { Wrapper, Box, Title };
