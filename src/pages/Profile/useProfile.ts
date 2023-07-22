import { useEffect } from 'react';

import { HandleRefetchData } from '../../components/global/Pagination/Pagination';

import { getSavedRequests } from '../../redux/savedRequests/savedRequestsActions';
import { useAppDispatch, useAppSelector } from '../../redux/store';

export const useProfile = () => {
  const dispatch = useAppDispatch();
  const { loading, pagination, savedRequests } = useAppSelector().savedRequests;

  useEffect(() => {
    !savedRequests.length && !loading && dispatch(getSavedRequests({}));
  }, []);

  const handleRefetch = (data: HandleRefetchData) => {
    dispatch(getSavedRequests(data));
  };

  return { handleRefetch, pagination, savedRequests };
};
