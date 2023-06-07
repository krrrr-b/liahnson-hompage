import styled, { css, keyframes } from 'styled-components';
import expert from 'assets/images/expert.jpeg';

const Wrapper = styled.div`
  padding-top: 18.4rem;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      background-color: var(--color-grey-300);
      background-image: url("/static/media/expert.582f54c834d1a4801603.jpeg");
      background-repeat: no-repeat;
    }
  `}
`;

const Container = styled.div`
  position: relative;
  max-width: 173.3rem;
  width: 100%;
  height: 100%;
  margin: auto;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      max-width: 141.3rem;
    }
  `}
`;

const Inner = styled.div`
  position: relative;
  height: 100%;
  margin: 0 auto;
  width: 75%;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      width: 85%;
    }
  `}
`;

const Image = styled.img`
  position: relative;
  height: 100%;
  margin: 0 auto;
  width: 75%;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      width: 85%;
    }
  `}
`;

const Title = styled.h3`
  margin-bottom: 7.1rem;
  font-weight: 510;
  font-size: 2.5rem;
  line-height: 3rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin-bottom: 2.9rem;
      color: var(--color-grey-000);
      font-weight: 510;
      font-size: 40px;
      line-height: 55px;
      &:not(:last-child) {
        padding-bottom: 0;
        margin-bottom: 0;
      }
    }
  `}
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 46.6rem 1fr;
  grid-template-rows: auto auto;

  @media (max-width: 1452px) {
    display: flex;
    flex-wrap: wrap;
    & > * {
      flex: 1;
    }
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      display: none;
    }
  `}
`;

const GridScore = styled.p`
  margin: 3rem 0 0 8.1rem;
  font-weight: 590;
  font-size: 14rem;
  line-height: 18.2rem;
`;

const GridItem = styled.div`
  display: flex;
  background-color: var(--color-black-010);
  color: var(--color-grey-300);
  cursor: pointer;

  &:nth-child(-n + 3) {
    grid-row: 1;
  }
  &:nth-child(n + 4) {
    grid-row: 2;
  }

  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3) {
    border-bottom: 0.1rem solid var(--color-grey-300);
  }

  &:nth-child(2),
  &:nth-child(5) {
    border-right: 0.1rem solid var(--color-grey-300);
    border-left: 0.1rem solid var(--color-grey-300);
  }

  &:nth-child(1),
  &:nth-child(4) {
    justify-content: end;
  }

  &:nth-child(3),
  &:nth-child(6) {
    justify-content: start;
  }

  &:hover {
    color: var(--color-grey-800);
    background-color: var(--color-grey-000);

    ${GridScore} {
      color: var(--color-red-500);
    }
  }
`;

const GridInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 10rem 0rem 4.8rem;
  height: 89.9rem;
`;

const GridInnerTitle = styled.div`
  flex: 1;
  padding-top: 11.4rem;
  font-weight: 700;
  font-size: 4rem;
  line-height: 4.8rem;
`;

const GridInnerContent = styled.ul`
  margin: 6rem 0 14.4rem;
`;

const GridInnerItem = styled.li`
  font-weight: 510;
  font-size: 2rem;
  line-height: 4rem;
`;

const DropdownContainer = styled.div`
  display: none;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      display: block;
    }
  `}
`;

const Dropdown = styled.div<{ backgroundColor: string }>`
  transition: all 0.8s cubic-bezier(0.51, 0.01, 0, 0.99);
  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `}
`;

const DropdownTitleWrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 3.8rem 0 2.7rem;
  transition: all 0.8s cubic-bezier(0.51, 0.01, 0, 0.99);
  overflow: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
`;

const DropdownTitle = styled.div`
  color: var(--color-grey-000);
  font-weight: 510;
  font-size: 25px;
  line-height: 30px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      font-size: 21px;
    }
  `}
`;

const DropdownScore = styled.div<{ isOpen: boolean }>`
  position: relative;
  bottom: -2.5rem;
  font-weight: 510;
  font-size: 80px;
  line-height: 40px;

  transition: all 0.8s cubic-bezier(0.51, 0.01, 0, 0.99);
  ${({ isOpen }) =>
    isOpen
      ? css`
          color: var(--color-red-100);
          bottom: 0rem;
        `
      : css`
          color: var(--color-grey-000);
        `}
`;

const openAnimation = keyframes`
  0% {
    max-height: 0;
  }
  100% {
    max-height:100rem;
  }
`;

const closeAnimation = keyframes`
  0% {
    max-height: 100rem;
  }
  100% {
    max-height: 0;
  }
`;

const DropdownContent = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  font-size: 18px;
  line-height: 40px;
  color: var(--color-grey-000);
  overflow: hidden;

  ${({ isOpen }) =>
    isOpen
      ? css`
          animation: ${openAnimation} 0.8s cubic-bezier(0.51, 0.01, 0, 0.99)
            forwards;
        `
      : css`
          animation: ${closeAnimation} 0.8s cubic-bezier(0.51, 0.01, 0, 0.99)
            forwards;
        `}
`;

const ItemWrapper = styled.ul`
  padding: 7.3rem 0;
`;

const Item = styled.li`
  list-style: inside;
`;

export default {
  ItemWrapper,
  Item,
  Wrapper,
  Title,
  Inner,
  Image,
  GridContainer,
  GridItem,
  Container,
  GridInner,
  GridInnerTitle,
  GridInnerContent,
  GridInnerItem,
  GridScore,
  DropdownContainer,
  Dropdown,
  DropdownTitleWrapper,
  DropdownTitle,
  DropdownScore,
  DropdownContent,
};
