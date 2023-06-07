import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  padding: 13rem 0 13.3rem;

  & > * {
    flex: 1;
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding: 10rem 0 14rem;
    }
  `}
`;

const Title = styled.h3`
  font-weight: 590;
  font-size: 25px;
  line-height: 30px;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      display: none;
    }
  `}
`;

const Description = styled.p`
  margin-bottom: 23rem;
  font-weight: 400;
  font-size: 30px;
  line-height: 60px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      display: none;
    }
  `}
`;

const ExpertsContent = styled.p`
  margin-bottom: 7.7rem;
  font-weight: 400;
  font-size: 30px;
  line-height: 60px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      font-weight: 400;
      font-size: 15px;
      line-height: 30px;
    }
  `}
`;

export default {
  Wrapper,
  Title,
  Description,
  ExpertsContent,
};
