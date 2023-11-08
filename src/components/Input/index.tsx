import { TextInputProps } from 'react-native';

import { Container } from './styles';

type InputProps = TextInputProps & {
  height?: number;
}
export const Input = ({ height = 48, ...rest }: InputProps) => {
  return (
    <Container height={height} {...rest}/>
  )
}