import styled, { css } from 'styled-components';

export const PageWrapper = styled.footer(
  ({ theme: { colors } }) => css`
    align-items: center;
    background-color: ${colors.backgroundPrimary};
    border-top: 1px solid ${colors.secondary};
    display: flex;
    justify-content: center;
  `,
);

export const Text = styled.p`
  letter-spacing: 1px;
`;
