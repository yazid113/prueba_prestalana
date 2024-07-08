import styled from 'styled-components';

export const FavoriteStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 36px 0;
  margin: 48px 0;
  border-radius: 24px;
  max-width: 288px;
  background-color: ${({ theme }) => theme.colors.primary[50]};
  span {
    width: 70%;
    margin: 0 auto;
    text-align: center;
  }
`;

export const FavoriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 48px;
  margin: 0 24px;
  overflow-y: auto;
  scrollbar-gutter: stable;
  height: calc(100% - 70px);
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary[40]};
    border-radius: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;