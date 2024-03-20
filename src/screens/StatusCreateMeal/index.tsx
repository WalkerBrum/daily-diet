import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';

import { Button } from '@components/Button';
import { useMealsContext } from '@hooks/useMealsContext';

import HappyIllustraion from '@assets/happy-Illustration.png';
import UnhappyIllustration from '@assets/unhappy-Illustration.png';

import { Container, ContainerButton, MessageSubtitle, MessageTitle, PersonIndicatorStatusMeal } from './styles';

export const StatusCreateMeal = () => {
  const { navigate } = useNavigation();
  const { insideDiet } = useMealsContext();

  const handleGoBackHome = () => {
    navigate('home');
  }

  const isInsideDiet = insideDiet === 'GOOD';
  const typeColor = isInsideDiet ? 'PRIMARY' : 'SECONDARY' 

  return (
    <Container>
      <MessageTitle color={typeColor}>
        {isInsideDiet ? 'Continue assim!' : 'Que pena!' }
      </MessageTitle>
      {isInsideDiet ? (
        <MessageSubtitle>
          Você continua <Text style={{ fontWeight: 'bold' }}>dentro da dieta</Text>. Muito bem! 
        </MessageSubtitle>
      ) : (
        <MessageSubtitle>
          Você <Text style={{ fontWeight: 'bold' }}>saiu da dieta</Text> dessa vez, mas continue se esforçando e não desista!
        </MessageSubtitle>
      )}

      <PersonIndicatorStatusMeal 
        source={isInsideDiet ? HappyIllustraion : UnhappyIllustration} 
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