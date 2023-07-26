import { useEffect, useState } from 'react';

import { HandleRefetchData } from '../../components/global/Pagination/Pagination';

import { useModal } from '../../hooks/useModal';

import { getSavedRequests } from '../../redux/savedRequests/savedRequestsActions';
import { useAppDispatch, useAppSelector } from '../../redux/store';

export const useProfile = () => {
  const dispatch = useAppDispatch();
  const { loading, pagination, savedRequests } = useAppSelector().savedRequests;

  const savingTimesModal = useModal();
  const [savingTimesToShow, setSavingTimesToShow] = useState<number[]>([]);

  const handleRefetch = (data: HandleRefetchData) => {
    dispatch(getSavedRequests(data));
  };

  const handleOpenModal = (savingTimes: number[]) => {
    setSavingTimesToShow(savingTimes);
    savingTimesModal.handleOpen();
  };

  useEffect(() => {
    !savedRequests.length && !loading && dispatch(getSavedRequests({}));
  }, []);

  return {
    handleOpenModal,
    handleRefetch,
    loading,
    pagination,
    savedRequests,
    savingTimesModal,
    savingTimesToShow,
  };
};
