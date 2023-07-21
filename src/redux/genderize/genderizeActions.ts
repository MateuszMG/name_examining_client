import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { reduxErrorHandler } from '../../helpers/errors';

import { genderizeApiUrl } from '../../utils/config/const';

export interface Genderized {
  count: number;
  gender: string;
  name: string;
  probability: number;
}

export const genderize = createAsyncThunk<Genderized, string>(
  'user/login',
  async (name: string, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${genderizeApiUrl}/?name=${name}`);

      return res.data;
    } catch (error) {
      return reduxErrorHandler({ error, rejectWithValue });
    }
  },
);
