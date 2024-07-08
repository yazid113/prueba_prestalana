import ReactDOM from 'react-dom';
import { ModalOverlayStyles } from './ModalStyles';

export enum ModalPosition {
  Center = 'center',
  FlexStart = 'flex-start',
  FlexEnd = 'flex-end',
}

interface ModalProps {
  children: React.ReactNode;
  modalPosition?: ModalPosition;
}

const Modal = ({
  children,
  modalPosition = ModalPosition.Center,
}: ModalProps) => {
  return ReactDOM.createPortal(
    <ModalOverlayStyles $modalPosition={modalPosition}>
      {children}
    </ModalOverlayStyles>,
    document.getElementById('modal') as HTMLElement
  );
};

export default Modal;
