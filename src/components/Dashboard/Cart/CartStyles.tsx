import styled from 'styled-components';

export const CartHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CartWrapper = styled.section`
  width: 30%;
  background-color: ${({ theme }) => theme.colors.primary[20]};
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  justify-content: space-between;
  height: 100%;
`;

export const CheckoutButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary[30]};
  color: ${({ theme }) => theme.colors.neutral[0]};
  padding: 8px 16px;
  border: none;
  border-radius: 32px;
  cursor: pointer;
  font-weight: 500px;
  margin-bottom: 12px;
  font-family: 'Work Sans', sans-serif;
`;

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  overflow-y: auto;
  height: calc(100% - 63px);
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary[30]};
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.primary[20]};
  }
`;

export const CartFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CloseButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary[30]};
  color: ${({ theme }) => theme.colors.neutral[0]};
  padding: 8px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  font-family: 'Work Sans', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
`;
