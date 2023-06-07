import styled, { css } from 'styled-components';

const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: 1.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform-style: preserve-3d;
`;

const Wrapper = styled.div<{
  width?: string;
  height?: string;
  isVertical?: boolean;
  isReactive?: boolean;
  isFlipped: boolean;
}>`
  width: ${({ width, isReactive }) => (isReactive ? '100%' : width || '200px')};
  height: ${({ height }) => height || '250px'};
  perspective: 1000px;

  ${({ isVertical, isFlipped }) =>
    isVertical
      ? `${Card} {
          transform: ${isFlipped ? 'rotateX(180deg)' : ''};
        }`
      : `${Card} {
          transform: ${isFlipped ? 'rotateY(180deg)' : ''};
        }`};
  ${({ isReactive, width }) =>
    isReactive &&
    css`
      max-width: ${width};
    `};
  margin: 0 auto;
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 2rem;
`;

const Front = styled(CardFace)<{ imageUrl: string }>`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  background-color: var(--color-black-070);
  background-blend-mode: multiply;
`;

const Back = styled(CardFace)<{ isVertical: boolean }>`
  background: var(--color-grey-800);

  ${({ isVertical }) =>
    isVertical
      ? `transform: rotateX(180deg);`
      : `
          transform: rotateY(180deg);
        `}
`;

const Title = styled.p<{ isVertical: boolean }>`
  ${({ isVertical }) =>
    isVertical
      ? `padding: 8.3rem 0 4.1rem 8.4rem;`
      : `padding: 11.5rem 0 4.1rem 8.4rem;`}
  color: var(--color-grey-000);
  font-size: 60px;
  line-height: 72px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding: 5.4rem 3rem 2.6rem;
      font-weight: 400;
      font-size: 40px;
      line-height: 50px;
    }
  `}
`;

const Content = styled.p`
  padding: 2.6rem 8.4rem 0 8.4rem;
  color: var(--color-grey-000);
  font-size: 25px;
  line-height: 40px;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding: 0 2rem;
      font-weight: 400;
      font-size: 18px;
      line-height: 35px;
    }
  `}
`;

const ButtonWrapper = styled.div`
  padding: 0 8.4rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      padding-left: 3.2rem;
    }
  `}
`;

export default { Wrapper, Card, Front, Back, Title, Content, ButtonWrapper };
