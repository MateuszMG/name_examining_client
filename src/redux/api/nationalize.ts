import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Country {
  country_id: string;
  probability: number;
}

interface Nationalize {
  count: number;
  country: Country[];
  name: string;
}

export const nationalizeApi = createApi({
  reducerPath: 'nationalizeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.nationalize.io' }),
  endpoints: (builder) => ({
    nationalize: builder.query<Nationalize, string>({
      query: (name) => `/?name=${name}`,
    }),
  }),
});

export const { useLazyNationalizeQuery } = nationalizeApi;
