import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

import { UseModal } from '../../../hooks/useModal';

import { CancelIcon } from '../Icon/Icon.styled';
import { ButtonWrap, ModalWrapper, Overlay } from './Modal.styled';

interface ModalProps extends UseModal {
  children: ReactNode;
}

export const Modal = ({ children, handleClose, open }: ModalProps) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <Overlay onClick={handleClose} />
      <ModalWrapper>
        <ButtonWrap onClick={handleClose}>
          <CancelIcon />
        </ButtonWrap>
        {children}
      </ModalWrapper>
    </>,
    document.getElementById('modal')!,
  );
};
