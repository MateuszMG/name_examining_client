import { darkTheme } from './darkMode';

export enum Theme {
  DARK = 'DARK',
}

export type ThemeType = typeof darkTheme;

export const themeVariants = {
  [Theme.DARK]: darkTheme,
};
