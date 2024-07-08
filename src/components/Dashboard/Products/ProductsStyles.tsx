import styled from 'styled-components';

export const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 24px;
  border-radius: 8px;
  margin: 56px 0;
`;

export const ProductsList = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 24px;
  border-radius: 24px;
  box-shadow: 0px 0px 9px 0px #a7a9ac40;
  background-color: ${({ theme }) => theme.colors.primary[20]};
  height: calc(100% - 100px);
  margin-top: 16px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 4px;
  }
`;
