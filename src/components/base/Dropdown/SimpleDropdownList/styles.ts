import styled, { css, keyframes } from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  user-select: none;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin-bottom: 1.2rem;
    }
  `}
`;

const DropdownTitle = styled.p`
  width: max-content;
  color: var(--color-grey-000);
  font-weight: 510;
  font-size: 30px;
  line-height: 36px;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      font-weight: 510;
      font-size: 15px;
      line-height: 18px;
    }
  `}
`;

const DropdownTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6rem 0 4.5rem;

  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    ${DropdownTitle} {
      transform: translateX(2rem);
    }
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      border: none;
      padding: 3.3rem 0 1.4rem;
    }
  `}
`;

const Dropdown = styled.div<{ isOpen: boolean }>`
  &:not(:last-child) ${DropdownTitleWrapper} {
    border-bottom: ${({ isOpen }) =>
      isOpen ? 'none' : ' 1px solid var(--color-grey-300)'};
  }

  ${({ theme, isOpen }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      &:not(:last-child) ${DropdownTitleWrapper} {
    border-bottom: 0;
    }

    &:last-child ${DropdownContent} {
      border-bottom: 0;
    }

  `}
`;

const DropdownIcon = styled.div`
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      display: none;
    }
  `}
`;

const openAnimation = keyframes`
  0% {
    max-height: 0;
  }
  100% {
    max-height: 500px;
  }
`;

const closeAnimation = keyframes`
  0% {
    max-height: 500px;
  }
  100% {
    max-height: 0;
  }
`;

const DropdownContent = styled.p<{ isOpen: boolean; isFirstRender: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
  font-size: 25px;
  line-height: 50px;
  color: var(--color-grey-000);
  overflow: hidden;
  ${({ isOpen, isFirstRender }) =>
    isOpen
      ? css`
          animation: ${openAnimation} 1.2s cubic-bezier(0.51, 0.01, 0, 0.99);
          animation-fill-mode: forwards;
        `
      : isFirstRender
      ? css`
          animation-fill-mode: none;
        `
      : css`
          animation: ${closeAnimation} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
          animation-fill-mode: forwards;
          animation-delay: -0.2s;
        `}

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding-bottom: 3.3rem;
      border-bottom: 0.1rem solid var(--color-grey-300);
      font-weight: 400;
      font-size: 15px;
      line-height: 30px;
    }
  `}
`;
export default {
  Wrapper,
  Dropdown,
  DropdownTitleWrapper,
  DropdownTitle,
  DropdownIcon,
  DropdownContent,
};
