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

export interface Pagination {
  limit: number;
  page: number;
  total: number;
}

export const defaultPagination: Pagination = {
  limit: 10,
  page: 0,
  total: 0,
};

const pageLimits = [5, 10, 15, 20, 25, 50, 75, 100, 150, 200];

export const pageLimitOptions = pageLimits.map((number) => ({
  value: number.toString(),
  label: number.toString(),
}));

export enum DayjsFormats {
  savedRequest = 'HH:mm:ss - DD MMM',
}
