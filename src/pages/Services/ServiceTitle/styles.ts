import styled, { css } from 'styled-components';
import PageTopPadding from 'components/shared/PageTopPadding';

const ServiceTitle = styled(PageTopPadding)`
  background-color: var(--color-grey-800);
`;

const ServiceTitleText = styled.h3`
  padding-top: 13rem;
  padding-bottom: 2.3rem;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  color: var(--color-grey-000);

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding-top: 10rem;
      font-weight: 590;
      font-size: 15px;
      line-height: 18px;
    }
  `}
`;

const ServiceDescription = styled.span`
  color: var(--color-grey-000);
  font-weight: 700;
  font-size: 80px;
  line-height: 95px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      font-weight: 700;
      font-size: 40px;
      line-height: 52px;
    }
  `}
`;

const ServiceDescriptionHover = styled(ServiceDescription)``;

const ServiceDescriptionBox = styled.div`
  display: flex;
  gap: 2rem;
  width: fit-content;

  & {
    ${ServiceDescriptionHover} {
      color: var(--color-red-100);
    }
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      flex-direction: column;
      gap: 0.5rem;
    }
  `}
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30rem;
  height: 31.4rem;
  border-radius: 2rem;
  box-shadow: var(--shadow-level-3);
  transition: background-color 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
  background-color: var(--color-grey-300);
`;

const HoverIconWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 17.6rem;
  & > :not(:last-child) {
    margin-right: 3.2rem;
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      flex-direction: column;
      flex-wrap: nowrap;
    }
  `}
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin-top: 7.6rem;
      padding-bottom: 17.6rem;
    }
  `}
`;

const ExpandedListWrapper = styled.div`
  display: flex;
  padding: 8.2rem 0 28.4rem;

  @media (max-width: 860px) {
    flex-wrap: wrap;
    padding: 11rem 0 17.6rem;
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding: 1.5rem 0 0rem;
    }
  `}
`;

const ExpandedListRight = styled.div`
  margin-right: 26.4rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin-right: 0;
    }
  `}
`;

const ExpandedListRightTitle = styled.p`
  /* padding-top: 60rem;
  margin-top: -60rem; */
  margin-bottom: 4.6rem;
  font-weight: 700;
  font-size: 60px;
  line-height: 72px;
  color: var(--color-grey-000);

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin-bottom: 1.8rem;
      font-size: 25px;
      line-height: 30px;
    }
  `}
`;

const DescriptionContent = styled.p`
  margin-bottom: 8.4rem;
  margin-top: 4rem;
  color: var(--color-grey-000);
  font-size: 25px;
  line-height: 50px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      font-weight: 400;
      font-size: 18px;
      line-height: 35px;
    }
  `}
`;

const ExpandedListRightDescription = styled.p`
  font-weight: 400;
  font-size: 25px;
  line-height: 50px;
  color: var(--color-grey-000);

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin-bottom: 1.5rem;
      font-size: 15px;
      line-height: 30px;
    }
  `}
`;

const ExpandedListLeft = styled.div``;

export default {
  ServiceTitle,
  ServiceTitleText,
  ServiceDescriptionBox,
  ServiceDescription,
  ServiceDescriptionHover,
  ExpandedListRight,
  ExpandedListWrapper,
  ExpandedListRightTitle,
  ExpandedListRightDescription,
  ExpandedListLeft,
  DescriptionContent,
  HoverIconWrapper,
  Box,
};
