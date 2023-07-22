import dayjs from 'dayjs';

import { Modal } from '../../../components/global/Modal/Modal';

import { UseModal } from '../../../hooks/useModal';

import { DayjsFormats } from '../../../utils/config/const';

import { SavingTimesWrapper } from './SavingTimesModal.styled';

interface SavingTimesModalProps extends UseModal {
  savingTimes: number[];
}

export const SavingTimesModal = ({
  savingTimes,
  ...modalData
}: SavingTimesModalProps) => {
  return (
    <Modal {...modalData}>
      <SavingTimesWrapper>
        {savingTimes.map((unixTime) => (
          <p> {dayjs(unixTime).format(DayjsFormats.savedRequest)} </p>
        ))}
      </SavingTimesWrapper>
    </Modal>
  );
};
