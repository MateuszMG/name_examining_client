import { useEffect, useState } from 'react';

import { HandleRefetchData } from '../../components/global/Pagination/Pagination';

import { useModal } from '../../hooks/useModal';

import { getSavedRequests } from '../../redux/savedRequests/savedRequestsActions';
import { useAppDispatch, useAppSelector } from '../../redux/store';

export const useProfile = () => {
  const savingTimesModal = useModal();
  const [savingTimesToShow, setSavingTimesToShow] = useState<number[]>([]);

  const dispatch = useAppDispatch();
  const { loading, pagination, savedRequests } = useAppSelector().savedRequests;

  useEffect(() => {
    !savedRequests.length && !loading && dispatch(getSavedRequests({}));
  }, []);

  const handleRefetch = (data: HandleRefetchData) => {
    dispatch(getSavedRequests(data));
  };

  const handleOpenModal = (savingTimes: number[]) => {
    setSavingTimesToShow(savingTimes);
    savingTimesModal.handleOpen();
  };

  return {
    handleOpenModal,
    handleRefetch,
    pagination,
    savedRequests,
    savingTimesModal,
    savingTimesToShow,
  };
};
