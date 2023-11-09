import { useNavigation } from '@react-navigation/native';

import { Button } from '@components/Button';

import HappyIllustraion from '@assets/happy-Illustration.png';

import { Container, ContainerButton, MessageSubtitle, MessageTitle, PersonIndicatorStatusMeal } from './styles';

export const StatusCreateMeal = () => {
  const { navigate } = useNavigation();

  const handleGoBackHome = () => {
    navigate('home');
  }

  return (
    <Container>
      <MessageTitle>Continue assim!</MessageTitle>
      <MessageSubtitle>Você continua dentro da dieta. Muito bem!</MessageSubtitle>

      <PersonIndicatorStatusMeal 
        source={HappyIllustraion} 
        alt="Pessoa indicando se refeição é boa ou ruim para a dieta"
      />

      <ContainerButton>
        <Button 
          title="Ir para a página inicial" 
          onPress={handleGoBackHome}
        />
      </ContainerButton>
    </Container>
  );
}