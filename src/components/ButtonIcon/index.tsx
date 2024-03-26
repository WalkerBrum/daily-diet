import { TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Container, Icon } from './styles';

type ButtonIconProps = TouchableOpacityProps & {
  icon: keyof typeof Feather.glyphMap;
  color: string
}

export const ButtonIcon = ({ icon, color, ...rest}: ButtonIconProps) => {
  return (
    <Container {...rest}>
      <Icon name={icon} color={color} />
    </Container>
  )
}