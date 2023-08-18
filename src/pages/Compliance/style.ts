import styled, { css } from 'styled-components';

const Common = styled.a`
    color: #4374D9
`;

const Wrapper = styled.section`
  padding: 25rem 0;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding: 8.5rem 0 11.2rem;
    }
  `}
`;

const TitleWrapper = styled.div`
  display: flex;
  padding-bottom: 5.7rem;
  & > * {
    flex: 1;
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      flex-direction: column;
    }
  `}
`;

const Title = styled.div`
  font-weight: 590;
  font-size: 30px;
  line-height: 30px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin-top: 3rem;
      font-weight: 590;
      font-size: 30px;
      line-height: 18px;
    }
  `}
`;

const DescriptionWrapper = styled.div``;

const Description = styled.p`
  margin-bottom: 7.4rem;
  font-weight: 400;
  font-size: 20px;
  line-height: 37px;

  a {
    color: #4374D9
  }

  button {
    background-color: #7D98D4;
    width: 450px;
    height: 50px;
    font-size: 15pt;
    font-weight: 600;
  }
  
  table, th, td {
    border: 1px solid black;
    border-collapse:separate;
    border-spacing: 3px;
    text-align:center;
  }

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
  Common,
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
