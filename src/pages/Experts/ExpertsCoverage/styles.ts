import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  padding: 13rem 0;
  margin-bottom: -45rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding: 9.5rem 0;
      margin-bottom: 0rem;
      overflow-x: hidden;
    }
  `}
`;

const Title = styled.h3`
  margin-bottom: 3.2rem;
  font-weight: 590;
  font-size: 25px;
  line-height: 30px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      margin-bottom: 2.7rem;
      font-size: 15px;
      line-height: 18px;
    }
  `}
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 30px;
  line-height: 50px;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      font-size: 20px;
      line-height: 35px;
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
  padding: 13.9rem 0px 18rem 0px;

  ${({ theme }) => css`
@media (max-width: ${theme.breakpoints.medium}) {
  padding: 0px 0px 45% 0px;
  display: block;
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
bottom: 17%;

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

export default { Wrapper,  ImageBox, Box, Title, Description, CoverageBox, CoverageWrapper, CoverageImage };
