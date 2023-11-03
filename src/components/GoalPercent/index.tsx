import { ButtonIcon } from '@components/ButtonIcon';

import { ColorTypeStyleProps } from 'src/@types/colors';

import { Container, Icon, PercentTitle, SubTitle } from './styles';


type GoalPercentProps = {
  backgroundColor?: ColorTypeStyleProps
}

export const GoalPercent = ({ backgroundColor = 'PRIMARY'}: GoalPercentProps) => {
  return (
    <Container color={backgroundColor}>
      <PercentTitle>90,86%</PercentTitle>
      <SubTitle>das refeições dentro da dieta</SubTitle>

      <Icon
        name="arrow-up-right"
        color={backgroundColor}
      />
    </Container>
  )
}