import styled, { css } from 'styled-components';

const Title = styled.h3<{ color: string }>`
  position: absolute;
  top: 0;
  overflow: hidden;
  width: 100%;
  height: 70rem;
  color: ${({ color }) => color};
  user-select: none;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      height: 17rem;
    }
  `}
`;

const Content = styled.p`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  font-weight: 590;
  font-size: 150px;
  line-height: 263px;
  z-index: 1;
  white-space: nowrap;
  font-style: italic;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      font-weight: 700;
      font-size: 35px;
      line-height: 60px;
    }
  `}
`;

const ContentRight = styled(Content)`
  top: 25rem;
  margin-left: -34rem;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      top: 5rem;
      margin-left: -10rem;
    }
  `}

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      top: 5rem;
      margin-left: -4.4rem;
    }
  `}
`;

const ContentLeft = styled(Content)<{ lowerMobilePosition: string }>`
  top: 40rem;
  margin-left: 13rem;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.large}) {
      top: 10rem;
      margin-left: 4rem;
    }
  `}
  ${({ theme, lowerMobilePosition }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      top: 10rem;
      margin-left: ${lowerMobilePosition ? lowerMobilePosition : '1rem'};
    }
  `}
`;

export default { Title, ContentRight, ContentLeft };
