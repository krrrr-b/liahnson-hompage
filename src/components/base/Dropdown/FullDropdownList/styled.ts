import styled, { css, keyframes } from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  user-select: none;
`;

const Dropdown = styled.div<{ isOpen: boolean }>`
  ${({ isOpen }) =>
    isOpen
      ? css`
          background-color: var(--color-red-500);
          color: var(--color-grey-000);
        `
      : css`
          background-color: var(--color-black-010);
          color: var(--color-grey-300);
        `}
  transition: all 0.8s cubic-bezier(0.51, 0.01, 0, 0.99)
`;

const DropdownTitleWrapper = styled.div<{ isLast: boolean }>`
  display: flex;
  padding: 8.2rem 0 7.2rem;
  border-bottom: ${({ isLast }) =>
    isLast ? 0 : '0.1rem solid var(--color-grey-300)'};
  cursor: pointer;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      display: flex;
      flex-direction: column;
      padding: 6.1rem 0 4.9rem;
    }
  `};
`;

const DropdownTitle = styled.div`
  margin-right: 15.6rem;
  width: 18rem;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  white-space: nowrap;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: initial;
      margin: 0;
      font-weight: 510;
      font-size: 25px;
      line-height: 30px;
    }
  `}
`;

const DropdownDescription = styled.p<{ isOpen: boolean }>`
  margin: -0.9rem 7.2rem 0 4rem;
  font-size: 25px;
  line-height: 50px;

  ${({ theme, isOpen }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      margin: 4.3rem 0 0 0;
      display: none;
      ${isOpen &&
      css`
        display: block;
      `}
    }
  `}

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      font-size: 18px;
      line-height: 35px;
    }
  `}
`;

const DropdownScoreWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: right;
  right: 0px;
  gap: 1rem;
  margin-top: -2.9rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      display: none;
    }
  `}
`;

const DropdownScore = styled.p`
  font-weight: 274;
  font-size: 90px;
  line-height: 40px;
  white-space: nowrap;
`;

const DropdownUnit = styled.span`
  font-weight: 374;
  font-size: 90px;
  line-height: 40px;
  white-space: nowrap;
`;

const openAnimation = keyframes`
  0% {
    max-height: 0;
  }
  100% {
    max-height:200rem;
  }
`;

const closeAnimation = keyframes`
  0% {
    max-height: 200rem;
  }
  100% {
    max-height: 0;
  }
`;

const DropdownContent = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  font-size: 25px;
  line-height: 50px;
  background-color: var(--color-grey-000);
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

const ItemWrapper = styled.div`
  padding: 11.9rem 0 8.7rem;
  color: var(--color-grey-800);

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      padding: 5.8rem 0 6.1rem;
    }
  `}
`;

const ItemTitle = styled.p`
  margin-bottom: 1.9rem;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      font-size: 18px;
      line-height: 21px;
    }
  `}
`;

const ItemDescription = styled.div`
  display: flex;
  gap: 0.7rem;
  margin-bottom: 8.9rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      flex-direction: column;
      gap: 0;
      margin-bottom: 6.1rem;
    }
  `}
`;

const ItemDescriptionTitle = styled.span`
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      font-weight: 400;
      font-size: 18px;
      line-height: 35px;
    }
  `}
`;

const ItemDescriptionContent = styled.b`
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      font-weight: 400;
      font-size: 18px;
      line-height: 35px;
    }
  `}
`;

const ItemContentWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8.9rem;
`;

const ItemContent = styled.li`
  display: flex;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      flex-direction: column;
    }
  `}
`;

const ItemContentTitle = styled.p`
  width: 10rem;
  margin-right: 25.5rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      font-weight: 700;
      font-size: 18px;
      line-height: 38px;
    }
  `}
`;

const ItemContentDescriptionWrapper = styled.ul`
  width: 64rem;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      width: 100%;
    }
  `}
`;

const ItemContentDescription = styled.li`
  list-style: outside;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      font-weight: 400;
      font-size: 18px;
      line-height: 38px;
      list-style: none;
    }
  `}
`;

export default {
  ItemDescription,
  Wrapper,
  Dropdown,
  DropdownTitleWrapper,
  DropdownTitle,
  DropdownDescription,
  DropdownScoreWrapper,
  DropdownScore,
  DropdownContent,
  ItemWrapper,
  ItemTitle,
  ItemDescriptionTitle,
  ItemDescriptionContent,
  ItemContentWrapper,
  ItemContent,
  ItemContentTitle,
  ItemContentDescription,
  ItemContentDescriptionWrapper,
  DropdownUnit,
};
