import styled, { css } from 'styled-components';

export const Wrapper = styled.div(
  ({ theme: { colors } }) => css`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: flex-end;
    padding: 8px 16px;

    .pagination {
      align-items: center;
      cursor: pointer;
      display: flex;
      gap: 8px;
      padding: 8px 16px;

      & {
        line-height: 50%;
      }
    }

    .pagination-active {
      color: ${colors.primary};
    }
  `,
);
