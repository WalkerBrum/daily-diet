import { TouchableOpacityProps } from 'react-native';

import { Loading } from '@components/Loading';
import { NoMealRecord } from '@components/NoMealRecord';

import { useMealsContext } from '@hooks/useMealsContext';
import { percentInsideDiet } from '@utils/percentInsideDiet';

import { Container, Icon, PercentTitle, SubTitle } from './styles';

type GoalPercentProps = TouchableOpacityProps & {}

export const GoalPercent = ({ ...rest }: GoalPercentProps) => {
  const { meals, loading } = useMealsContext();

  const percentDiet = percentInsideDiet(meals);
  const backgroundColor = percentDiet >= 50 ? 'PRIMARY' : 'SECONDARY'

  return (
    <Container color={backgroundColor} {...rest}>
      {!isNaN(percentDiet) ? (
        <>
          {loading ? (
            <Loading />
          ) : (
            <PercentTitle>{percentDiet}%</PercentTitle>
          )}
          <SubTitle>das refeições dentro da dieta</SubTitle>
        </>
      ) : (
        <NoMealRecord />
      )}

      <Icon
        name="arrow-up-right"
        color={backgroundColor}
      />
    </Container>
  )
}