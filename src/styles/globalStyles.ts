import { createGlobalStyle, css } from 'styled-components';

const palette = {
  grey: {
    '000': '#fff',
    '100': '#F0F0F0',
    '300': '#a7a7a7',
    '800': '#292929',
    '900': '#000',
  },
  red: {
    '100': '#ff85a4',
    '500': '#581123',
  },
  black: {
    '010': 'rgba(167, 167, 167, 0.1)',
    '030': 'rgba(167, 167, 167, 0.3)',
    '040': 'rgba(167, 167, 167, 0.4)',
    '050': 'rgba(182, 182, 182, 0.3)',
    '060': 'rgba(219, 219, 219, 0.3)',
    '070': 'rgba(41, 41, 41, 0.5)',
  },
};

const styles = css`
  *,
  *::before,
  *::after {
    work-break: keep-all;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: '-apple-system', 'BlinkMacSystemFont', 'Apple SD Gothic Neo',
      'Inter', 'Spoqa Han Sans', sans-serif;
  }

  p {
    work-break: keep-all;
  }

  html {
    work-break: keep-all;
    height: 100%;
    width: 100%;
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    work-break: keep-all;
    height: 100%;
    width: 100%;
    line-height: 1.5;
    font-family: -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', Inter,
      'Spoqa Han Sans Neo', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    work-break: keep-all;
    text-decoration: none;
    color: inherit;
  }

  button {
    work-break: keep-all;
    background: transparent;
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  ol,
  ul,
  li {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  :root {
    // colors
    --color-grey-000: ${palette.grey['000']};
    --color-grey-100: ${palette.grey['100']};
    --color-grey-300: ${palette.grey['300']};
    --color-grey-800: ${palette.grey['800']};
    --color-grey-900: ${palette.grey['900']};
    --color-red-100: ${palette.red['100']};
    --color-red-500: ${palette.red['500']};
    --color-black-010: ${palette.black['010']};
    --color-black-030: ${palette.black['030']};
    --color-black-040: ${palette.black['040']};
    --color-black-050: ${palette.black['050']};
    --color-black-060: ${palette.black['060']};
    --color-black-070: ${palette.black['070']};

    // box-shadow
    --shadow-level-1: 0rem 0rem 3rem 1rem rgba(0, 0, 0, 0.04);
    --shadow-level-2: 0rem 0rem 0.4rem rgba(0, 0, 0, 0.25);
    --shadow-level-3: 0rem 0rem 1rem 0.3rem rgba(0, 0, 0, 0.2);

    // media breakpoints
    /* --breakpoint-medium: 768px; */
    /* --breakpoint-large: 1024px; */
  }
`;

const GlobalStyles = createGlobalStyle`
    ${styles};
`;

export default GlobalStyles;
