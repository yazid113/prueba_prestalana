import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 105px;
  box-shadow: 0px 4px 4px 0px #00000040;
  border-radius: 20px;
`;

export const ProductTitle = styled.span`
  font-weight: 700;
  line-height: 14.08px;
  font-size: 12px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const AddToCartButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary[30]};
  color: ${({ theme }) => theme.colors.neutral[0]};
  border: none;
  border-radius: 13px;
  padding: 9px 3px;
  cursor: pointer;
  font-weight: 700;
  font-size: 12px;
  font-family: 'Work Sans', sans-serif;
`;