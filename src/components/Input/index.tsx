import { TextInput, TextInputProps } from 'react-native';

import { Container } from './styles';

type InputProps = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
  height?: number; 
}

export const Input = ({ inputRef, height = 48, ...rest }: InputProps) => {
  return (
    <Container 
      ref={inputRef}
      height={height} 
      {...rest}
    />
  )
}