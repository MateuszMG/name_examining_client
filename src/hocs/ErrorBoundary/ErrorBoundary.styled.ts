import { CSSProperties } from 'react';

import { palette } from '../../utils/theme/themeConfig';

export const pageWrapperStyles: CSSProperties = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  justifyContent: 'center',
  marginTop: '64px',
};

export const buttonStyles: CSSProperties = {
  border: `none`,
  borderRadius: `8px`,
  boxShadow: `1px 1px 3px 1px ${palette.primary}`,
  cursor: `pointer`,
  letterSpacing: ` 1px`,
  padding: `8px 32px`,
};
