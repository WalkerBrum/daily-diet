import { TouchableOpacityProps } from 'react-native';

import { ButtonTypeStyleProps, Container, Icon, Title } from './styles';

type ButtonProps = TouchableOpacityProps & {
  colors?: ButtonTypeStyleProps;
  icon?: string;
  title: string;
}

export const Button = ({ colors = 'PRIMARY', icon, title, ...rest }: ButtonProps) => {
  return (
    <Container {...rest} colors={colors}>
      <Icon name={icon} colors={colors}/>
      <Title colors={colors}>{title}</Title>
    </Container>
  )
}