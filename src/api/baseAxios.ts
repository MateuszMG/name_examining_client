import axiosLibrary from 'axios';

import { getFromTheLS } from '../helpers/localStorage';

import { serverApiUrl } from '../utils/config/const';

export const axios = axiosLibrary.create({
  baseURL: serverApiUrl,
  withCredentials: true,
});

export const authAxios = () =>
  axiosLibrary.create({
    baseURL: serverApiUrl,
    headers: {
      authorization: 'Bearer ' + getFromTheLS('accessToken'),
    },
    withCredentials: true,
  });
