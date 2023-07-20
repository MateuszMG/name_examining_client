import { Link as RouterLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const List = styled.div(
  ({ theme: { colors } }) => css`
    align-items: center;
    background-color: ${colors.backgroundPrimary};
    border-bottom: 1px solid ${colors.primary};
    display: flex;
    justify-content: space-between;
    min-height: 40px;
    padding: 0 12px;
  `,
);

export const Link = styled(RouterLink)(
  ({ theme: { colors } }) => css`
    padding: 4px;
    text-underline-offset: 4px;
    transition: 0.3s;

    &:hover {
      color: ${colors.primary};
    }
  `,
);
