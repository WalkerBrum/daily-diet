import { TouchableOpacityProps } from 'react-native';

import { Container, NameIndicator, StatusIndicator } from './styles';

type InputOption = TouchableOpacityProps &{
  title: string;
  isActive: boolean;
}

export const InputOption = ({ title, isActive, ...rest }: InputOption) => {
  return (
    <Container isActive={isActive} title={title} {...rest}>
      <StatusIndicator color={title} />
      <NameIndicator>{title}</NameIndicator>
    </Container>
  )
}