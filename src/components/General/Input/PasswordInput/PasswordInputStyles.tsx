import styled from 'styled-components';
import { StyledInput } from '../TextInput/TextInputStyles';

export const InputWithIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 2px solid ${({ theme }) => theme.colors.neutral[20]};
  border-radius: 32px;
  &:focus-within {
    border: 2px solid ${({ theme }) => theme.colors.neutral[100]};
  }
`;

export const PassInput = styled(StyledInput)`
  border: none;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

export const ToggleVisibilityButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
