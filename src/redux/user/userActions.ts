import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { handleAccessToken } from '../../helpers/accessToken';
import { reduxErrorHandler } from '../../helpers/errors';

import { LoginSchema } from '../../pages/Auth/Login/useLogin';
import { RegisterSchema } from '../../pages/Auth/Register/useRegister';

import { axios } from '../../api/baseAxios';
import { RootState } from '../store';
import { setUser } from './userSlice';

interface AccessToken {
  accessToken: string;
}

export const login = createAsyncThunk<
  AccessToken,
  LoginSchema,
  { state: RootState }
>('user/login', async (data: LoginSchema, { rejectWithValue, dispatch }) => {
  try {
    const res = await axios.post(`/login`, data);

    dispatch(setUser(handleAccessToken(res.data.accessToken)));

    toast.success('Logged in successfully');

    return res.data;
  } catch (error) {
    return reduxErrorHandler({ error, rejectWithValue });
  }
});

export const register = createAsyncThunk<AccessToken, RegisterSchema>(
  'user/register',
  async (data: RegisterSchema, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.post(`/register`, data);

      dispatch(setUser(handleAccessToken(res.data.accessToken)));

      toast.success('Nice to meet you');

      return res.data;
    } catch (error) {
      return reduxErrorHandler({ error, rejectWithValue });
    }
  },
);

export const logout = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      localStorage.clear();
      dispatch(setUser(handleAccessToken('')));
      toast.success('See you later');

      await axios.get(`/logout`);

      return {};
    } catch (error) {
      return reduxErrorHandler({ error, rejectWithValue });
    }
  },
);

export const refreshToken = createAsyncThunk(
  'user/refreshToken',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.get(`/refreshToken`);

      dispatch(setUser(handleAccessToken(res.data.accessToken)));

      return res.data;
    } catch (error) {
      dispatch(logout());
      return reduxErrorHandler({ error, rejectWithValue });
    }
  },
);
