import { createSlice } from '@reduxjs/toolkit';

import { nationalize, Nationalized } from './nationalizeActions';

interface InitialState {
  error: any;
  loading: boolean;
  nationalized?: Nationalized;
}

export const nationalizeSlice = createSlice({
  name: 'nationalize',
  initialState: {
    error: undefined,
    loading: false,
    nationalized: undefined,
  } as InitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(nationalize.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(nationalize.fulfilled, (state, { payload }) => {
        state.nationalized = payload;
        state.loading = false;
      })
      .addCase(nationalize.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});
