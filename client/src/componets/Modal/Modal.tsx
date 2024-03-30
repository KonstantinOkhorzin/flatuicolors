import { FC, ReactElement } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, MotionProps } from 'framer-motion';

import { Backdrop } from './Modal.styled';

interface IModalProps extends MotionProps {
  children: ReactElement;
  isVisible: boolean;
}

const modalRoot = document.querySelector('#modal-root')!;

const Modal: FC<IModalProps> = ({ children, isVisible, ...motionProps }) => {
  return createPortal(
    <AnimatePresence>
      {isVisible && <Backdrop {...motionProps}>{children}</Backdrop>}
    </AnimatePresence>,
    modalRoot
  );
};

export default Modal;
