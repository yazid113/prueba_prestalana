import Modal from '../../General/Modal/Modal';
import {
  ButtonLayout,
  ConfirmationModalStyles,
  NoButton,
  YesButton,
} from './ConfirmationModalStyles';

interface ConfirmationModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationModal = ({ onCancel, onConfirm }: ConfirmationModalProps) => {
  return (
    <Modal>
      <ConfirmationModalStyles>
        <span>Are you sure you want to remove this item from favorite?</span>
        <ButtonLayout>
          <YesButton onClick={onConfirm}>Yes</YesButton>
          <NoButton onClick={onCancel}>No</NoButton>
        </ButtonLayout>
      </ConfirmationModalStyles>
    </Modal>
  );
};

export default ConfirmationModal;
