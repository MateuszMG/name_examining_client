import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { genderizeApi } from './api/genderize';
import { nationalizeApi } from './api/nationalize';

export const store = configureStore({
  reducer: {
    [genderizeApi.reducerPath]: genderizeApi.reducer,
    [nationalizeApi.reducerPath]: nationalizeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(genderizeApi.middleware)
      .concat(nationalizeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector = () => useSelector((state: RootState) => state);
