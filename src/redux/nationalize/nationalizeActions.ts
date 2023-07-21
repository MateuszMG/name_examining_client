import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { reduxErrorHandler } from '../../helpers/errors';

import { nationalizeApiUrl } from '../../utils/config/const';

interface Country {
  country_id: string;
  probability: number;
}

export interface Nationalized {
  count: number;
  country: Country[];
  name: string;
}

export const nationalize = createAsyncThunk<Nationalized, string>(
  'nationalize/name',
  async (name: string, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${nationalizeApiUrl}/?name=${name}`);
      const data = res.data as Nationalized;

      const sortedCountries = data.country.sort(
        (a, b) => b.probability - a.probability,
      );

      return { ...data, country: sortedCountries };
    } catch (error) {
      return reduxErrorHandler({ error, rejectWithValue });
    }
  },
);
