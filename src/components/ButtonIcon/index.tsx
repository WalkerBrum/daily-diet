import { TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { ColorProps, ColorTypeStyleProps } from 'src/@types/colors';

import { Container, Icon } from './styles';

type ButtonIconProps = TouchableOpacityProps & {
  icon: keyof typeof Feather.glyphMap;
  type?: ColorTypeStyleProps
}

export const ButtonIcon = ({ icon, type, ...rest}: ButtonIconProps) => {
  return (
    <Container {...rest}>
      <Icon name={icon} color={type} />
    </Container>
  )
}