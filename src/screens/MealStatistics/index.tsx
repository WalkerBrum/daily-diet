import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';

import { Container, FlexRow, Subtitle } from './styles';

export const MealStatistics = () => {
  const { COLORS, FONT_SIZE } = useTheme();
  const { navigate } = useNavigation();

  const handleGoBackHome = () => {
    navigate('home');
  }

  return (
    <>
      <Header onPress={handleGoBackHome}/>

      <Container>
        <Subtitle>Estatísticas gerais</Subtitle>

        <Dashboard
          title="22"
          subtitle="melhor sequência de pratos dentro da dieta" 
          backgroundColor={COLORS.GRAY_200}
        />

        <Dashboard
          title="109"
          subtitle="refeições registradas" 
          backgroundColor={COLORS.GRAY_200}
        />

        <FlexRow>
          <Dashboard
            title="99"
            subtitle="refeições dentro da dieta"
            height={107} 
            backgroundColor={COLORS.GREEN_LIGHT}
          />

          <Dashboard
            title="10"
            subtitle="refeições fora da dieta"
            height={107}  
            backgroundColor={COLORS.RED_LIGHT}
          />
        </FlexRow>
        
      </Container>
    </>
  )
}