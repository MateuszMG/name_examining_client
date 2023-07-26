import { createSlice } from '@reduxjs/toolkit';

import { genderize, Genderized } from './genderizeActions';

interface InitialState {
  error: any;
  genderized?: Genderized;
  loading: boolean;
}

const initialState: InitialState = {
  error: undefined,
  genderized: undefined,
  loading: false,
};

export const genderizeSlice = createSlice({
  name: 'genderize',
  initialState,
  reducers: {
    clearGenderizeState: () => initialState,
  },
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

export const { clearGenderizeState } = genderizeSlice.actions;
