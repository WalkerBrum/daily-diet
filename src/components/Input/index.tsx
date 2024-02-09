import { TextInput, TextInputProps } from 'react-native';

import { Container, InputText, MessageError } from './styles';

type InputProps = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
  height?: number;
  errorMessage?: string | null;
}

export const Input = ({ inputRef, errorMessage, height = 48, ...rest }: InputProps) => {
  const invalid = !!errorMessage;

  return (
    <Container>
      <InputText
        ref={inputRef}
        height={height}
        error={invalid}
        {...rest}
      />
      
      {invalid && (
        <MessageError>{errorMessage}</MessageError>
      )}
    </Container>
  )
}