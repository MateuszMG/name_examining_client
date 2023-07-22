import { createSlice } from '@reduxjs/toolkit';

import { defaultPagination, Pagination } from '../../utils/config/const';

import {
  getSavedRequests,
  SavedRequest,
  saveRequest,
} from './savedRequestsActions';

interface InitialState {
  error: any;
  loading: boolean;
  pagination: Pagination;
  savedRequests: SavedRequest[];
}

export const savedRequestsSlice = createSlice({
  name: 'savedRequests',
  initialState: {
    error: null,
    loading: false,
    pagination: defaultPagination,
    savedRequests: [],
  } as InitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // getSavedRequests
      .addCase(getSavedRequests.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSavedRequests.fulfilled, (state, { payload }) => {
        state.savedRequests = payload.savedRequests;
        state.pagination = payload.pagination;
        state.loading = false;
      })
      .addCase(getSavedRequests.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      // saveRequest
      .addCase(saveRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(saveRequest.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(saveRequest.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});
