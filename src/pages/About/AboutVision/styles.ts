import styled, { css } from 'styled-components';

const Wrapper = styled.section`
  padding: 36.3rem 0 29.4rem 0;
  background-color: var(--color-grey-800);

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding: 37rem 0 0;
    }
  `}
`;

const TriadWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 80.2rem;
  color: var(--color-grey-000);

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin-bottom: 10rem;
    }
  `}
`;

const TriadItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 10.5rem;
  &:not(:last-child) {
    margin-bottom: 19.4rem;
  }
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      flex-direction: column;
      gap: 3.7rem;

      &:not(:last-child) {
        margin-bottom: 14.4rem;
      }
      &:last-child {
        margin-bottom: 17.4rem;
      }
    }
  `}
`;

const TriadTitle = styled.p`
  padding-top: 2.2rem;
  max-width: 29.5rem;
  width: 100%;
  font-size: 25px;
  line-height: 30px;
  border-top: 3px solid var(--color-grey-000);

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding: 3rem 0 2rem;
      border-top: 0;
      font-weight: 590;
      font-size: 30px;
      line-height: 36px;
    }
  `}
`;

const Numbering = styled.span`
  font-weight: 590;
  font-size: 18px;
  line-height: 21px;
`;

const TriadIconWrapper = styled.div<{ paddingTop: string }>`
  padding-top: ${({ paddingTop }) => paddingTop ?? '0'}};
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding-top: 2.2rem;
    }
  `}
`;

const TriadDescription = styled.div`
  padding-top: 1.4rem;
  font-size: 25px;
  line-height: 50px;
  border-top: 3px solid var(--color-grey-000);

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      font-weight: 400;
      font-size: 18px;
      line-height: 35px;
    }
  `}
`;

const ButtonWrapper = styled.div`
  display: flex;
  padding: 9.4rem 0 0;
  margin-left: 33.5rem;

  & > :first-child {
    margin-right: 5.2rem;
  }

  @media (max-width: 1124px) {
    margin-left: 0;
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      flex-direction: column;
      gap: 2.2rem;
      margin-left: 0;
      padding-bottom: 16rem;
      border-bottom: 0.1rem solid var(--color-grey-300);
    }
  `}
`;

const BackgroundWrapper = styled.div`
  position: relative;
  top: -86rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      top: -52rem;
    }
  `}
`;

export default {
  Wrapper,
  TriadWrapper,
  TriadItem,
  TriadTitle,
  TriadIconWrapper,
  TriadDescription,
  ButtonWrapper,
  Numbering,
  BackgroundWrapper,
};
