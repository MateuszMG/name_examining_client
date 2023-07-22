import styled, { css } from 'styled-components';

export const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40px minmax(calc(100vh - 80px), 1fr) 40px;
  min-height: 100%;
`;

export const PageWrapper = styled.div(
  ({ theme: { devices } }) => css`
    margin: 0 auto;
    max-width: ${devices['1600px']};
    width: 100%;
  `,
);

export const Design = styled.div(
  ({ theme: { colors } }) => css`
    background: linear-gradient(
      148deg,
      ${colors.primary} 0,
      transparent 15% 85%,
      ${colors.secondary} 100%
    );
    height: 100%;
    position: fixed;
    width: 100%;
    z-index: -1;
  `,
);
