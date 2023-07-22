import { css, styled } from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  margin: 64px 0;
`;

export const TotalInfo = styled.h3`
  margin-left: 8px;
  text-align: left;
`;

export const Name = styled.h1`
  text-align: center;
`;

export const SavedRequestsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-weight: bold;
  gap: 64px;
  justify-content: space-evenly;
`;

const wrapperStyles = css(
  ({ theme: { colors } }) => css`
    border-radius: 50px;
    box-shadow: 1px 1px 1px 1px ${colors.primary};
    cursor: pointer;
    padding: 16px 32px;
    transition: 0.3s;

    &:hover {
      box-shadow: 1px 1px 5px 2px ${colors.secondary};
      transform: scale(1.05);
    }
  `,
);

export const SavedRequestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 320px;
`;

export const Table = styled.table`
  ${wrapperStyles}
`;

export const TR = styled.tr`
  display: flex;
  gap: 24px;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.tr`
  display: flex;
  justify-content: center;
  margin-top: 8px;
`;

export const Countries = styled.div`
  ${wrapperStyles}
`;

export const Country = styled.div`
  display: flex;
  gap: 24px;
  justify-content: space-between;
`;
