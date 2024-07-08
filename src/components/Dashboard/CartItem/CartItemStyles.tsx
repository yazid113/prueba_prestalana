import styled from 'styled-components';
import { ProductImage } from '../ProductCard/ProductCardStyles';

export const CartItemWrapper = styled.div`
  display: flex;
  gap: 8px;
  width: 98%;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex-grow: 1;
`;

export const ProductCartImage = styled(ProductImage)`
  width: 105px;
`;

export const DeleteItemButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary[30]};
  color: ${({ theme }) => theme.colors.neutral[0]};
  border: none;
  border-radius: 50%;
  padding: 4px;
  cursor: pointer;
  font-weight: 700;
  font-size: 12px;
  font-family: 'Work Sans', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`;

export const QuantitySection = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const ReverseArrow = styled(DeleteItemButton)`
  transform: rotate(180deg);
`;