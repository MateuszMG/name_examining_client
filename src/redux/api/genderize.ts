import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Genderize {
  count: number;
  gender: string;
  name: string;
  probability: number;
}

export const genderizeApi = createApi({
  reducerPath: 'genderizeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.genderize.io' }),
  endpoints: (builder) => ({
    genderize: builder.query<Genderize, string>({
      query: (name) => `/?name=${name}`,
    }),
  }),
});

export const { useLazyGenderizeQuery } = genderizeApi;
