import styled from 'styled-components';
import { ModalPosition } from './Modal';

interface ModalOverlayStylesProps {
  $modalPosition: ModalPosition;
}

export const ModalOverlayStyles = styled.div<ModalOverlayStylesProps>`
  display: flex;
  justify-content: ${({ $modalPosition }) => $modalPosition};
  align-items: center;
  position: fixed;
  width: 100%;
  max-width: 1920px;
  height: 100%;
  z-index: 10;
  background: rgba(88, 81, 77, 0.25);
`;

export const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
`;
