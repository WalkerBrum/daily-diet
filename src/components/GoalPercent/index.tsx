import { ButtonIcon } from '@components/ButtonIcon';

import { Container, Icon, PercentTitle, SubTitle, backgroundColorStyleProps } from './styles';

type GoalPercentProps = {
  backgroundColor?: backgroundColorStyleProps
}

export const GoalPercent = ({ backgroundColor = 'PRIMARY' }: GoalPercentProps) => {
  return (
    <Container backgroundColor={backgroundColor}>
      <PercentTitle>90,86%</PercentTitle>
      <SubTitle>das refeições dentro da dieta</SubTitle>

      <Icon 
        name="arrow-up-right"
        backgroundColor={backgroundColor}
      />
    </Container>
  )
}