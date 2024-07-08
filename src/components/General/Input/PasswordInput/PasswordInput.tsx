import { StyledInputWithLabel } from '../TextInput/TextInputStyles';
import CloseEye from '../../Icons/CloseEye';
import { useState } from 'react';
import OpenEye from '../../Icons/OpenEye';
import {
  InputWithIcon,
  PassInput,
  ToggleVisibilityButton,
} from './PasswordInputStyles';

interface PasswordInputProps {
  name: string;
  label: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput = ({
  handleChange,
  name,
  value,
  label,
}: PasswordInputProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };
  const type = isVisible ? 'text' : 'password';
  return (
    <StyledInputWithLabel>
      <label htmlFor="password">{label}</label>
      <InputWithIcon>
        <PassInput
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
        />
        <ToggleVisibilityButton onClick={toggleVisibility} type="button">
          {isVisible ? <OpenEye /> : <CloseEye />}
        </ToggleVisibilityButton>
      </InputWithIcon>
    </StyledInputWithLabel>
  );
};

export default PasswordInput;
