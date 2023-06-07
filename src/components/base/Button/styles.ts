import styled, { css } from 'styled-components';
import { ButtonColor } from './constants';
import { HTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  color: ButtonColor;
  transparentBorder?: boolean;
  isMobile?: boolean;
}

const getColorStyles = (color: string) => {
  switch (color) {
    case 'white':
      return `
        border: 0.3rem solid var(--color-grey-000);
        background-color: var(--color-grey-000);
        color: var(--color-grey-800);
      `;
    case 'black':
      return `
        border: 0.3rem solid var(--color-grey-800);
        background-color: var(--color-grey-800);
        color: var(--color-grey-000);
      `;
    case 'red':
      return `
        border: 0.3rem solid var(--color-red-500);
        background-color: var(--color-red-500);
        color: var(--color-grey-000);
      `;
    case 'pale-red':
      return `
        border: 0.3rem solid var(--color-red-100);
        background-color: var(--color-red-100);
        color: var(--color-grey-000);
      `;
    case 'transparent-white':
      return `
        border: 0.3rem solid var(--color-grey-000);
        background-color: transparent;
        color: var(--color-grey-000);
      `;
    case 'transparent-black':
      return `
          border: 0.3rem solid var(--color-grey-800);
          background-color: transparent;
          color: var(--color-grey-800);
        `;
    case 'grey':
      return `
        border: 0.3rem solid var(--color-grey-300);
        background-color: var(--color-grey-300);
        color: var(--color-grey-800);
      `;
    case 'light-grey':
      return `
      // border: 0.3rem solid var(--color-black-050);
      background-color: var(--color-black-050);
      color: var(--color-grey-000);
      `;
    case 'shadow':
      return `
        border: 0.3rem solid var(--color-grey-000);
        color: rgba(167, 167, 167, 0.5);
        box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.05);
        `;
    default:
      return `
      border: 0.3rem solid var(--color-grey-800);
      background-color: var(--color-grey-000);
      color: var(--color-grey-800)`;
  }
};

const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 99rem;
  font-size: 2rem;
  font-weight: 700;
  user-select: none;

  ${({ color }: { color: string }) => getColorStyles(color)};
  ${({ transparentBorder }) =>
    transparentBorder &&
    css`
      border: 0.3rem solid transparent;
    `}
  ${({ isMobile }) =>
    isMobile &&
    css`
      border-width: 0.1rem;
    `}

    ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      font-weight: 590;
    }
  `}
`;

export default { Button };
