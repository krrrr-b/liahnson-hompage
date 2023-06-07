import PageTopPadding from 'components/shared/PageTopPadding';
import styled, { css } from 'styled-components';

const Title = styled(PageTopPadding)`
  background-color: var(--color-black-030);

  padding-bottom: 3.7rem;
  ${({ theme }) => css`
  @media (max-width: ${theme.breakpoints.medium}) {
    padding-bottom: 9rem;
  }
`}
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleText = styled.h3`
  padding: 13rem 0 2.3rem;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  color: var(--color-grey-800);

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding: 10rem 0 1rem 0
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
  flex-direction: column;
  gap: 2rem;
  width: fit-content;
  margin-bottom: 7.4rem;

  & {
    ${DescriptionHover} {
      color: var(--color-red-100);
    }
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin-bottom: 3rem;
    }
  `}
`;

const DescriptionContent = styled.p`
  margin-bottom: 17.5rem;
  max-width: 62rem;
  color: var(--color-grey-800);
  font-size: 25px;
  line-height: 50px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin-bottom: 3rem;
      font-weight: 400;
      font-size: 18px;
      line-height: 35px;
    }
  `}
`;

const CareersImage = styled.img`
  width: 417.13px;
  height: 499.92px;
  border-radius: 2rem;
  object-fit: cover;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      display: none;
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
  Wrapper,
  CareersImage,
};
