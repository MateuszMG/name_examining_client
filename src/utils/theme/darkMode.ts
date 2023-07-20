import { devices, palette } from './themeConfig';

export const darkTheme = {
  colors: {
    backgroundPrimary: palette.black,
    backgroundSecondary: palette.lightBlack,
    backgroundReverse: palette.white,

    fontPrimary: palette.white,
    fontSecondary: palette.lightWhite,
    fontReverse: palette.black,

    primary: palette.primary,
    secondary: palette.secondary,

    error: palette.error,
    success: palette.success,
  },
  devices,
};
