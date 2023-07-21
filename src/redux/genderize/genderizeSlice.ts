import { createSlice } from '@reduxjs/toolkit';

import { genderize, Genderized } from './genderizeActions';

interface InitialState {
  error: any;
  genderized?: Genderized;
  loading: boolean;
}

export const genderizeSlice = createSlice({
  name: 'genderize',
  initialState: {
    error: undefined,
    genderize: undefined,
    loading: false,
  } as InitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(genderize.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(genderize.fulfilled, (state, { payload }) => {
        state.genderized = payload;
        state.loading = false;
      })
      .addCase(genderize.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});
