import PageTopPadding from 'components/shared/PageTopPadding';
import styled, { css } from 'styled-components';

const Title = styled(PageTopPadding)`
  background-color: var(--color-grey-800);
`;

const TitleText = styled.h3`
  padding: 13rem 0 2.2rem;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  color: var(--color-grey-000);

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding: 10rem 0 1rem;
      font-weight: 590;
      font-size: 15px;
      line-height: 18px;
    }
  `}
`;

const Description = styled.span`
  color: var(--color-grey-000);
  font-weight: 700;
  font-size: 80px;
  line-height: 95px;
  margin-bottom: -50px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      font-size: 40px;
      line-height: 52px;
    }
  `}
`;

const DescriptionHover = styled(Description)``;

const DescriptionBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: fit-content;
  margin-bottom: 5rem;

  & {
    ${DescriptionHover} {
      color: var(--color-red-100);
    }
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      flex-direction: column;
      gap: 0.5rem;
      margin-bottom: 4.7rem;
    }
  `}
`;

const DescriptionContent = styled.p`
  margin-bottom: 8.4rem;
  margin-top: 8rem;
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

export default {
  Title,
  TitleText,
  Description,
  DescriptionHover,
  DescriptionBox,
  DescriptionContent,
};
