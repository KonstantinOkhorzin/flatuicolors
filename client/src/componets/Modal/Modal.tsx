import { FC, ReactElement } from 'react';
import { createPortal } from 'react-dom';

import { Backdrop } from './Modal.styled';

interface IModalProps {
  children: ReactElement;
}

const modalRoot = document.querySelector('#modal-root')!;

const Modal: FC<IModalProps> = ({ children }) => {
  return createPortal(<Backdrop>{children}</Backdrop>, modalRoot);
};

export default Modal;
