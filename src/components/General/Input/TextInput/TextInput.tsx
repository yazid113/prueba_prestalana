import { StyledInput, StyledInputWithLabel } from './TextInputStyles';

interface TextInputProps {
  name: string;
  label: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({ name, label, value, handleChange }: TextInputProps) => {
  return (
    <StyledInputWithLabel>
      <label htmlFor={name}>{label}</label>
      <StyledInput
        type={'text'}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </StyledInputWithLabel>
  );
};

export default TextInput;
