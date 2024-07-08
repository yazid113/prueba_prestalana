import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background-color: ${({ theme }) => theme.colors.primary[30]};
  color: ${({ theme }) => theme.colors.neutral[0]};
`;

export const CartButton = styled.button`
  position: relative;
  background-color: ${({ theme }) => theme.colors.primary[10]};
  color: ${({ theme }) => theme.colors.neutral[0]};
  border: none;
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  font-family: 'Work Sans', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CartCounter = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: ${({ theme }) => theme.colors.primary[40]};
  color: ${({ theme }) => theme.colors.neutral[0]};
  border-radius: 50%;
  padding: 4px;
  font-size: 12px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const LogoutButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary[10]};
  color: ${({ theme }) => theme.colors.neutral[0]};
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  font-family: 'Work Sans', sans-serif;
`;
