import { config } from './config';

export const serverApiUrl = `${config.REACT_APP_SERVER_URL}/api`;
export const refreshTokenBeforeExpire =
  config.REACT_APP_REFRESH_TOKEN_BEFORE_EXPIRE;

export const genderizeApiUrl = 'https://api.genderize.io';
export const nationalizeApiUrl = 'https://api.nationalize.io';

export enum UserRoles {
  ADMIN = 'ADMIN',
}

export enum AppRoles {
  ADMIN = 'ADMIN',
  EVERYBODY = 'EVERYBODY',
  NOT_LOGGED = 'NOT_LOGGED',
}
