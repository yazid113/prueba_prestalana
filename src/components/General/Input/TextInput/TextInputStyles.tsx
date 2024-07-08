import styled from 'styled-components';

export const StyledInput = styled.input`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.neutral[20]};
  border-radius: 32px;
`;

export const StyledInputWithLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  label {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.neutral[50]};
    font-size: 12px;
    line-height: 12px;
  }
`;