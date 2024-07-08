import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 465px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 24px 56px 24px 56px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.neutral[0]};
`;

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

export const LoginButton = styled.button`
  width: 305px;
  padding: 0.5rem;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.colors.primary[30]};
  color: ${({ theme }) => theme.colors.neutral[0]};
  font-weight: 500;
  line-height: 16px;
  border: none;
  cursor: pointer;
  margin: 0 auto;
`;

export const Title = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral[50]};
  line-height: 16px;
  text-align: center;
`;

export const AgreementText = styled.span`
  width: 199px;
  font-size: 12px;
  line-height: 14.08px;
  color: #414042;
  text-align: center;
  font-weight: 300;
  margin: 0 auto;
  a {
    color: #414042;
  }
`;

export const ErrorText = styled.p`
  color: red;
  text-align: center;
`;
