import styled from 'styled-components';

export const SearchboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  label {
    font-weight: 700;
    color: #050505;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 17px;
  height: 36px;
  padding: 0 16px;
`;