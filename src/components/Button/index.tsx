import { TouchableOpacityProps } from 'react-native';

import { ButtonTypeStyleProps, Container, Icon, Title } from './styles';

type ButtonProps = TouchableOpacityProps & {
  colors?: ButtonTypeStyleProps
  icon?: string
}

export const Button = ({ colors = 'PRIMARY', icon, ...rest }: ButtonProps) => {
  return (
    <Container {...rest} colors={colors}>
      <Icon name={icon} colors={colors}/>
      <Title colors={colors}>Nova Refeição</Title>
    </Container>
  )
}