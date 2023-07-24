import { createAsyncThunk } from '@reduxjs/toolkit';

import { reduxErrorHandler } from '../../helpers/errors';

import { axios } from '../../utils/config/axios';
import { Pagination } from '../../utils/config/const';

import { Genderized } from '../genderize/genderizeActions';
import { Nationalized } from '../nationalize/nationalizeActions';

export interface SavedRequest {
  createdAt: string;
  genderized: Genderized;
  name: string;
  nationalized: Nationalized;
  savingTimes: number[];
  updatedAt: string;
  userId: string;
}

interface GetSavedRequestsParams {
  limit: number;
  page: number;
}

interface GetSavedRequestsResponse {
  savedRequests: SavedRequest[];
  pagination: Pagination;
}

export const getSavedRequests = createAsyncThunk<
  GetSavedRequestsResponse,
  Partial<GetSavedRequestsParams>
>('user/getSavedRequests', async (params, { rejectWithValue }) => {
  try {
    const res = await axios().get(`/savedRequests`, { params });
    return res.data;
  } catch (error) {
    return reduxErrorHandler({ error, rejectWithValue });
  }
});

interface SaveRequestBody {
  genderized: Genderized;
  name: string;
  nationalized: Nationalized;
}

export const saveRequest = createAsyncThunk<{}, SaveRequestBody>(
  'user/saveRequest',
  async (body, { rejectWithValue }) => {
    try {
      await axios().post(`/savedRequests`, body);
    } catch (error) {
      return reduxErrorHandler({ error, rejectWithValue });
    }
  },
);
