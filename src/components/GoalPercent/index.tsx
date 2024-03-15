import { TouchableOpacityProps } from 'react-native';

import { ColorTypeStyleProps } from 'src/@types/colors';

import { Container, Icon, PercentTitle, SubTitle } from './styles';
import { useContext } from 'react';
import { MealsContext } from '@context/MealsProvider';
import { percentInsideDiet } from '@utils/percentInsideDiet';
import { Loading } from '@components/Loading';
import { NoMealRecord } from '@components/NoMealRecord';


type GoalPercentProps = TouchableOpacityProps & {}

export const GoalPercent = ({ ...rest }: GoalPercentProps) => {
  const { meals, loading } = useContext(MealsContext);

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