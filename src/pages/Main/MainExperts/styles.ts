import styled, { css } from 'styled-components';

const Wrapper = styled.section`
  padding: 13rem 0;
  margin-bottom: -30rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding: 8.5rem 0 11.2rem;
      margin-bottom: 0rem;
    }
  `}
`;

const TitleWrapper = styled.div`
  display: flex;
  padding-bottom: 18.7rem;
  & > * {
    flex: 1;
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      flex-direction: column;
      padding-bottom: 13rem;
    }
  `}
`;

const Title = styled.div`
  font-weight: 590;
  font-size: 25px;
  line-height: 30px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin-bottom: 3rem;
      font-weight: 590;
      font-size: 15px;
      line-height: 18px;
    }
  `}
`;

const DescriptionWrapper = styled.div``;

const Description = styled.p`
  margin-bottom: 7.4rem;
  font-weight: 400;
  font-size: 30px;
  line-height: 55px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin-bottom: 4rem;
      font-size: 15px;
      line-height: 30px;
    }
  `}
`;

const SubTitle = styled.div`
  margin-bottom: 10rem;
  font-weight: 590;
  font-size: 25px;
  line-height: 30px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 6.5rem;
    }
  `}
`;

const MobileLine = styled.div`
  height: 0.3rem;
  width: 100%;
  background-color: var(--color-grey-800);
`;

const SubDescriptionList = styled.ul`
  display: flex;
  gap: 3.6rem;

  & > * {
    flex: 1;
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      flex-direction: column;
      margin-bottom: 17.7rem;
      gap: 7.5rem;
    }
  `}
`;

const SubDescriptionItem = styled.li``;

const SubDescription = styled.p`
  padding: 0 3rem 0 2rem;
  font-weight: 400;
  font-size: 25px;
  line-height: 50px;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding: 0;
      font-size: 18px;
      line-height: 35px;
    }
  `}
`;

const SubDescriptionIconWrapper = styled.div`
  margin-bottom: 3.5rem;
  padding-bottom: 3rem;
  border-bottom: 0.3rem solid var(--color-red-500);

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      border: 0;
      padding-bottom: 0;
    }
  `}
`;

export default {
  Wrapper,
  TitleWrapper,
  Title,
  DescriptionWrapper,
  Description,
  SubTitle,
  SubDescriptionList,
  SubDescriptionItem,
  SubDescription,
  SubDescriptionIconWrapper,
  MobileLine,
};
