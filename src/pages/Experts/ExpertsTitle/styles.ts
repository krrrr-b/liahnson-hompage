import PageTopPadding from 'components/shared/PageTopPadding';
import styled, { css } from 'styled-components';

const Title = styled(PageTopPadding)`
  background-color: var(--color-grey-000);
`;

const TitleText = styled.h3`
  padding-top: 13rem;
  padding-bottom: 2.3rem;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  color: var(--color-grey-800);

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      padding-top: 10rem;
      font-weight: 590;
      font-size: 15px;
      line-height: 18px;
    }
  `}
`;

const Description = styled.span`
  color: var(--color-grey-800);
  font-weight: 700;
  font-size: 80px;
  line-height: 95px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      font-weight: 700;
      font-size: 40px;
      line-height: 50px;
    }
  `}
`;

const DescriptionHover = styled(Description)``;

const DescriptionBox = styled.div`
  display: flex;
  gap: 2rem;
  width: fit-content;

  & {
    ${DescriptionHover} {
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

const BottomBox = styled.div`
  display: flex;
  margin-top: 5rem;

  & > * {
    flex: 1;
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      flex-direction: column;
      gap: 5rem;
    }
  `}
`;

const BottomLeft = styled.p`
  margin-right: 16rem;
  font-weight: 490;
  font-size: 25px;
  line-height: 50px;
  padding-bottom: 10rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      margin-right: 0;
      font-weight: 490;
      font-size: 20px;
      line-height: 40px;
      margin-bottom: -50px;
    }
  `}
`;

const BottomRight = styled.p`
  padding-bottom: 13rem;
  font-weight: 400;
  font-size: 25px;
  line-height: 50px;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      padding-bottom: 8rem;
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
  BottomBox,
  BottomLeft,
  BottomRight,
};
