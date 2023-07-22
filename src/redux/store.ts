import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import { genderizeSlice } from './genderize/genderizeSlice';
import { nationalizeSlice } from './nationalize/nationalizeSlice';
import { savedRequestsSlice } from './savedRequests/savedRequestsSlice';
import { userSlice } from './user/userSlice';

export const store = configureStore({
  reducer: {
    genderized: genderizeSlice.reducer,
    nationalized: nationalizeSlice.reducer,
    savedRequests: savedRequestsSlice.reducer,
    user: userSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const useAppSelector = () => useSelector((state: RootState) => state);
export const useAppDispatch = () => useDispatch<AppDispatch>();
