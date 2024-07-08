import PasswordInput from '../General/Input/PasswordInput/PasswordInput';
import TextInput from '../General/Input/TextInput/TextInput';
import {
  AgreementText,
  ErrorText,
  LoginButton,
  StyledForm,
  Title,
} from './LoginFormStyles';

interface LoginFormProps {
  email: string;
  password: string;
  error: string | undefined;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const LoginForm = ({
  error,
  handleChange,
  handleSubmit,
  password,
  email,
}: LoginFormProps) => {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>Inicia sesión</Title>
      <TextInput
        name={'email'}
        label={'Username'}
        value={email}
        handleChange={handleChange}
      />
      <PasswordInput
        name={'password'}
        label={'Password'}
        value={password}
        handleChange={handleChange}
      />
      <LoginButton type="submit">Login</LoginButton>
      <AgreementText>
        <a href="#">Términos y condiciones de uso</a> y el
        <br />
        <a href="#">Aviso de privacidad</a> de Multiapoyo.
      </AgreementText>
      {error && <ErrorText>{error}</ErrorText>}
    </StyledForm>
  );
};

export default LoginForm;
