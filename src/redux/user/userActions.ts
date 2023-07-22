import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { handleAccessToken, User } from '../../helpers/accessToken';
import { reduxErrorHandler } from '../../helpers/errors';

import { LoginSchema } from '../../pages/Auth/Login/useLogin';
import { RegisterSchema } from '../../pages/Auth/Register/useRegister';

import { axios } from '../../api/baseAxios';

export const login = createAsyncThunk<User, LoginSchema>(
  'user/login',
  async (data: LoginSchema, { rejectWithValue }) => {
    try {
      const res = await axios().post(`/login`, data);

      const user = handleAccessToken(res.data.accessToken);

      toast.success('Logged in successfully');

      return user;
    } catch (error) {
      return reduxErrorHandler({ error, rejectWithValue });
    }
  },
);

export const register = createAsyncThunk<User, RegisterSchema>(
  'user/register',
  async (data: RegisterSchema, { rejectWithValue }) => {
    try {
      const res = await axios().post(`/register`, data);

      const user = handleAccessToken(res.data.accessToken);

      toast.success('Nice to meet you');

      return user;
    } catch (error) {
      return reduxErrorHandler({ error, rejectWithValue });
    }
  },
);

export const logout = createAsyncThunk('user/logout', async () => {
  try {
    localStorage.clear();
    const user = handleAccessToken('');

    toast.success('See you later');
    await axios().get(`/logout`);

    return user;
  } catch (error) {}
});

export const refreshToken = createAsyncThunk(
  'user/refreshToken',
  async (_, { dispatch }) => {
    try {
      const res = await axios().get(`/refreshToken`);

      const user = handleAccessToken(res.data.accessToken);

      return user;
    } catch (error) {
      dispatch(logout());
    }
  },
);
