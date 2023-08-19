import { Link, NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Header = styled.nav<{ isOpen: boolean }>`
  position: absolute;
  width: 100%;
  height: 13rem;
  background-color: transparent;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;

  ${({ isOpen, theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      position: ${isOpen ? 'fixed' : 'absolute'};
      top: 0;
      background-color: ${isOpen ? 'var(--color-grey-100)' : ''};
      z-index: 100;
      height: ${isOpen ? '100%' : 'initial'};
      overflow-y: scroll;
    }
  `}
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      flex-direction: column;
      height: initial;
    }
  `};
`;

const Left = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      padding: 1.6rem 0;
      height: initial;
    }
  `};
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 30.3rem;
  margin-right: 3rem;
`;

const DropdownButton = styled.div`
  display: none;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      display: block;
    }
  `}
`;

const Right = styled.ul<{ isOpen: boolean }>`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  word-wrap: break-word;
  word-break: break-all;

  & > *:not(:last-child) {
    margin-right: 3.5rem;
  }

  & > :nth-child(5) {
    margin-right: 2.9rem;
  }

  & > :nth-child(6) {
    margin-right: 1.7rem;
  }

  ${({ isOpen, theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      display: ${isOpen ? 'flex' : 'none'};

      flex-direction: column;
      align-items: baseline;
      padding-top: 3rem;
    }
  `}
`;

const NavListItem = styled.li`
  font-size: 2rem;
  font-weight: 590;
  overflow-wrap: anywhere;
  word-wrap: break-word;
  word-break: break-all;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      font-weight: 510;
      font-size: 30px;
      line-height: 80px;
    }
  `}
`;

const LinkItem = styled(NavLink) <{ theme?: string }>`
  position: relative;
  display: inline-block;
  word-wrap: keep-all;
  padding-right: -5px;
  color: ${({ theme }) =>
    theme === 'dark' ? 'var(--color-grey-000)' : 'var(--color-grey-800)'};

  &.active {
    font-weight: 860;
    padding-right: -5px;
    /* letter-spacing: -0.1rem; */
  }
  &::before {
    padding-left: 10px;
    position: absolute;
    content: attr(aria-label);
    font-size: 1.9rem;
    padding-right: -5px;
    font-weight: 860;
    visibility: hidden;
    white-space: nowrap;
  }

  @media (max-width: 1024px) {
    color: var(--color-grey-800);
    white-space: nowrap;
    padding-right: -5px;
    word-break: keep-all;
    &.active {
      color: var(--color-red-500);
      font-weight: 700;
      font-size: 3.2rem;
    }

    &::before {
      padding-left: 10px;
      position: absolute;
      padding-right: -5px;
      word-break: keep-all;
      content: attr(aria-label);
      font-size: 3.2rem;
      font-weight: 700;
      visibility: hidden;
      white-space: nowrap;
    }
  }
`;

const LinkItemDiv = styled.div<{ theme?: string }>`
  position: relative;
  word-break: break-word;
  display: inline-block;
  color: ${({ theme }) =>
    theme === 'dark' ? 'var(--color-grey-000)' : 'var(--color-grey-800)'};

  &.active {
    font-weight: 860;
    /* letter-spacing: -0.1rem; */
  }
  &::before {
    position: absolute;
    content: attr(aria-label);
    font-size: 2rem;
    font-weight: 860;
    visibility: hidden;
    white-space: nowrap;
  }

  @media (max-width: 1024px) {
    color: var(--color-grey-800);
    white-space: nowrap;
    &.active {
      color: var(--color-red-500);
      font-weight: 700;
      font-size: 3.5rem;
    }

    &::before {
      position: absolute;
      content: attr(aria-label);
      font-size: 3.5rem;
      font-weight: 700;
      visibility: hidden;
      white-space: nowrap;
    }
  }
`;

const NotInMobile = styled.div`
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      display: none;
    }
  `}
`;

const MobileOnly = styled.div`
  display: none;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      display: block;
      padding-bottom: 5rem;
      width: 100%;
      border-bottom: 0.2rem solid var(--color-grey-800);
    }
  `}
`;

const MobileLeft = styled.div`
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      align-self: flex-end;
      padding: 5rem 0;
    }
  `}
`;

export default {
  Header,
  LogoLink,
  Right,
  NavListItem,
  LinkItem,
  LinkItemDiv,
  Wrapper,
  Left,
  DropdownButton,
  NotInMobile,
  MobileLeft,
  MobileOnly,
};
