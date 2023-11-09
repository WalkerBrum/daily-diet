import { ScrollView } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import { MealHeader } from '@components/MealHeader';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { InsideDiet } from '@components/InsideDiet';

import { Container, ContainerButton, FlexDirection, Subtitle } from './styles';

export const NewMeal = () => {
  const { COLORS } = useTheme();
  const { navigate } = useNavigation();

  const handleGoBackHome = () => {
    navigate('home');
  }

  const handleStatusCreateMeal = () => {
    navigate('statusCreateMeal');
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <MealHeader 
        backgroundColor={COLORS.GRAY_300} 
        title="Nova refeição"
        onPress={handleGoBackHome} 
      />

      <Container>
        <Subtitle>Nome</Subtitle>
        <Input />

        <Subtitle>Nome</Subtitle>
        <Input 
          height={120} 
          multiline 
          textAlignVertical="top"
        />

        <FlexDirection direction="row">
          <FlexDirection direction="column">
            <Subtitle>Data</Subtitle>
            <Input />
          </FlexDirection>

          <FlexDirection direction="column">
            <Subtitle>Hora</Subtitle>
            <Input />
          </FlexDirection>
        </FlexDirection>

        <Subtitle>Está dentro da dieta?</Subtitle>
        <InsideDiet />
        
        <ContainerButton>
          <Button title="Cadastrar Refeição" onPress={handleStatusCreateMeal} />
        </ContainerButton>

      </Container>
    </ScrollView>
  )
}