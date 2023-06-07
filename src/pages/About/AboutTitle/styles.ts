import PageTopPadding from 'components/shared/PageTopPadding';
import styled, { css } from 'styled-components';

const Title = styled(PageTopPadding)`
  background-color: var(--color-grey-000);
  padding-bottom: 33.1rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding-bottom: 27.6rem;
    }
  `}
`;

const TitleText = styled.h3`
  padding: 13rem 0 2.3rem;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  color: var(--color-grey-800);

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding: 10rem 0 1.4rem;
    }
  `}
`;

const DescriptionBox = styled.div``;

const Description = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.3rem;

  color: var(--color-grey-800);
  font-weight: 700;
  font-size: 50px;
  line-height: 85px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      font-weight: 500;
      font-size: 25px;
      line-height: 44px;
      gap: 0rem;
    }
  `}
`;

export default {
  Title,
  TitleText,
  Description,
  DescriptionBox,
};
