import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { handleAccessToken, User } from '../../helpers/accessToken';
import { getFromTheLS } from '../../helpers/localStorage';

import { login, register } from './userActions';

interface InitialState extends User {
  error: any;
  loading: boolean;
}

const createInitialState = (): InitialState => ({
  ...handleAccessToken(getFromTheLS('accessToken')),
  error: null,
  loading: false,
});

export const userSlice = createSlice({
  name: 'user',
  initialState: createInitialState(),
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      return { ...state, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      //login
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      //register
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { setUser } = userSlice.actions;
