import styled, { css } from 'styled-components';

const SelectedWrapper = styled.div`
  display: flex;
`;

const Selected = styled.div`
  font-size: 2rem;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      font-size: 1.4rem;
    }
  `}
`;

const Wrapper = styled.div`
  position: relative;
  user-select: none;
`;

const Inner = styled.div``;

const DropdownWrapper = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--color-grey-300);
  border: transparent;
  border-radius: 3.5em;
  z-index: 1;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      border-radius: 2.5em;
    }
  `}
`;

const DropdownItem = styled.li<{ hasDropdown: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 1.6rem 2rem;
  font-size: 2rem;
  font-weight: 700;
  border-radius: 99.9rem;
  cursor: pointer;

  ${({ hasDropdown }) =>
    hasDropdown &&
    css`
      justify-content: space-between;
    `}

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      font-size: 1.2rem;
    }
  `}
`;

export default {
  Wrapper,
  SelectedWrapper,
  Selected,
  Inner,
  DropdownWrapper,
  DropdownItem,
};
