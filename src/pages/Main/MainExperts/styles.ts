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
      font-size: 15px;
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
      gap: 7.5rem;
    }
  `}
`;

const SubDescriptionItem = styled.li`
padding: 3.5rem;
border-radius: 20px;
box-shadow: 0px 0px 30px 10px rgba(0, 0, 0, 0.04);

${({ theme }) => css`
@media (max-width: ${theme.breakpoints.medium}) {
  box-shadow: none;
  border-radius: none;
  padding: none;
}
`}

`;

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
  margin-bottom: 1.5em;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding-bottom: 0;
      margin-bottom: 2rem;
    }
  `}
`;

const Box = styled.div`
  width: 35%;
  padding-bottom: 30px;

  span {
    color: #FF85A4;
  }

  &:nth-child(even) {
    margin-left: 15%;
  }
`;

const CoverageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%; 
  padding: 18rem 0rem;

  ${({ theme }) => css`
  @media (max-width: ${theme.breakpoints.medium}) {
    margin-top: -50px;
    margin-bottom: -150px;
    display: block;
    padding: 0px 0px 400px 0px;
    overflow-x: hidden;

    &:nth-of-type(1) {
      padding: 0px 0px 180px 0px;
    }
  }
`}
`;

const CoverageImage = styled.img`
position: absolute;
max-width: none;
`;

const ImageBox = styled.div`
position: absolute;
width:  781px;
height: 781px;
right: -30%;
bottom: 10%;
`;



const CoverageBox = styled.div`
  border-top: 3px solid #FF85A4;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      border-top: none;
      position: absolute;
    }
  `}
`;

const IconDiv = styled.div`
    padding: 7px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: var(--color-red-500);
    text-align: center;
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
  Box,
  CoverageBox,
  ImageBox,
  CoverageWrapper,
  CoverageImage,
  IconDiv
};
