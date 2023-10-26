import { TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { ButtonIconTypeStyleProps, Container, Icon } from './styles';

type ButtonIconProps = TouchableOpacityProps & {
  icon: keyof typeof Feather.glyphMap;
  type?: ButtonIconTypeStyleProps
}

export const ButtonIcon = ({ icon, type = 'PRIMARY', ...rest}: ButtonIconProps) => {
  return (
    <Container {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  )
}