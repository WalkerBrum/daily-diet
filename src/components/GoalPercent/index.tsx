import { ButtonIcon } from '@components/ButtonIcon';

import { Container, PercentTitle, SubTitle, backgroundColorStyleProps } from './styles';

type GoalPercentProps = {
  backgroundColor?: backgroundColorStyleProps
}

export const GoalPercent = ({ backgroundColor = 'PRIMARY'}: GoalPercentProps) => {
  return (
    <Container backgroundColor={backgroundColor}>
      <PercentTitle>90,86%</PercentTitle>
      <SubTitle>das refeições dentro da dieta</SubTitle>

      <ButtonIcon 
        icon="arrow-up-right"
        type={backgroundColor}
      />
    </Container>
  )
}