import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { Loading } from '@components/Loading';

import { useMealsContext } from '@hooks/useMealsContext';
import { infoMeals } from '@utils/infoMeals';
import { bestSequenceInsideDiet } from '@utils/bestSequenceInsideDiet';

import { Container, FlexRow, Subtitle } from './styles';

export const MealStatistics = () => {
  const { COLORS } = useTheme();
  const { navigate } = useNavigation();
  const { meals, loading } = useMealsContext();

  const { insideDiet, outOfTheDiet, totalMeals } = infoMeals(meals);

  const bestSequenceDiet = bestSequenceInsideDiet(meals);

  const handleGoBackHome = () => {
    navigate('home');
  }

  return (
    <>
      <Header onPress={handleGoBackHome}/>

      <Container>
        <Subtitle>Estatísticas gerais</Subtitle>

        {loading ? (
            <Loading />
          ) : (
            <>
              <Dashboard
                data={bestSequenceDiet}
                subtitle="melhor sequência de pratos dentro da dieta"
                backgroundColor={COLORS.GRAY_200}
              />

              <Dashboard
                data={totalMeals}
                subtitle="refeições registradas"
                backgroundColor={COLORS.GRAY_200}
              />

              <FlexRow>
                <Dashboard
                  data={insideDiet}
                  subtitle="refeições dentro da dieta"
                  height={107}
                  backgroundColor={COLORS.GREEN_LIGHT}
                />

                <Dashboard
                  data={outOfTheDiet}
                  subtitle="refeições fora da dieta"
                  height={107}
                  backgroundColor={COLORS.RED_LIGHT}
                />
              </FlexRow>
            </>
          )
        }

      </Container>
    </>
  )
}