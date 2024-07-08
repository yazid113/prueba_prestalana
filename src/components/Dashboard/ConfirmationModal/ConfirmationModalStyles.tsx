import styled from 'styled-components';

export const ConfirmationModalStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 36px 24px;
  background-color: ${({ theme }) => theme.colors.primary[50]};
  border-radius: 24px;
`;

export const ButtonLayout = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  font-family: 'Work Sans', sans-serif;
  width: 30%;
`;

export const YesButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary[10]};
  color: ${({ theme }) => theme.colors.neutral[0]};
`;

export const NoButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.neutral[0]};
  color: ${({ theme }) => theme.colors.primary[10]};
`;
