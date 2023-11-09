import { TouchableOpacityProps } from 'react-native';

import { ColorTypeStyleProps } from 'src/@types/colors';

import { Container, Icon, PercentTitle, SubTitle } from './styles';


type GoalPercentProps = TouchableOpacityProps & {
  backgroundColor?: ColorTypeStyleProps
}

export const GoalPercent = ({ backgroundColor = 'PRIMARY', ...rest }: GoalPercentProps) => {
  return (
    <Container color={backgroundColor} {...rest}>
      <PercentTitle>90,86%</PercentTitle>
      <SubTitle>das refeições dentro da dieta</SubTitle>

      <Icon
        name="arrow-up-right"
        color={backgroundColor}
      />
    </Container>
  )
}