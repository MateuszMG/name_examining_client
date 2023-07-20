import { PulseLoader } from 'react-spinners';
import styled from 'styled-components';
import { css } from 'styled-components';

export const LoaderTag = styled(PulseLoader)(
  ({ theme: { colors } }) => css`
    span {
      background-color: ${colors.primary} !important;
    }
  `,
);
