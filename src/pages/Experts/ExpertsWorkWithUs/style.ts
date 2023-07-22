import PageTopPadding from 'components/shared/PageTopPadding';
import styled, { css } from 'styled-components';

const Title = styled(PageTopPadding)`
  background-color: var(--color-grey-800);
  padding-bottom: 16rem;
  color: var(--color-grey-000);
`;

const TitleText = styled.h3`
  padding-bottom: 2.3rem;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      padding-top: 10rem;
      font-weight: 700;
      font-size: 15px;
      line-height: 18px;
    }
  `}
`;

const DescriptionBox = styled.div`
  display: flex;
  align-item: center;
  border-bottom: 1px solid white;
  padding: 8rem 0rem;
  justify-content: space-between;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      flex-direction: column;
      gap: 0.5rem;
      border-bottom: none;
    }
  `}
`;

const Number = styled.div`
  font-size: 96px;
  width: 30%;
  -webkit-text-stroke: 1px #FF85A4;
  width: fit-content;
  color: transparent;


  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      font-size: 50px;
    }
  `}
`;

const DescriptionContent = styled.div`
  width: 70%;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      flex-direction: column;
      font-size: 18px;
      width: 100%;
    }
  `}
`;

const ContentTitle = styled.p`
  font-size: 30px;
  font-weight: 700;
  padding-top: 2.5rem;

  ${({ theme }) => css`
  @media (max-width: ${theme.breakpoints.large}) {
  font-size: 18px;
  line-height: 35px;
  }
`}
  
`;

const ContentDetail = styled.p`
    font-size: 25px;
    color: white;
    line-height: 35px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
    font-size: 18px;
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

export default {
  Title,
  TitleText,
  Number,
  DescriptionBox,
  DescriptionContent,
  ContentTitle,
  ContentDetail,
  BottomBox
};
