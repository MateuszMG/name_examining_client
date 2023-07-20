import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle(
  ({ theme: { colors } }) => css`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      font-family: 'Roboto', 'Arial';
      scroll-behavior: smooth;
    }

    body {
      background: ${colors.backgroundPrimary};
      color: ${colors.fontPrimary};
      min-height: 100vh;
    }

    ul,
    li {
      list-style: none;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  `,
);
