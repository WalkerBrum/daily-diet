import { ScrollView } from "react-native";
import { useTheme } from "styled-components"
import { useNavigation } from "@react-navigation/native";

import { MealHeader } from "@components/MealHeader"
import { Button } from "@components/Button";
import { useMealsContext } from "@hooks/useMealsContext";

import { Container, ContainerButtons, ContainerInfoMeal, FlexDirection, NameIndicator, StatusMeal, Subtitle, Text, Title } from "./styles";

export const AboutMeal = () => {
  const { COLORS } = useTheme();
  const { navigate } = useNavigation();
  const { infoMeal } =  useMealsContext();

  const formattedDate = infoMeal?.date.replaceAll('.', '/')

  const handleGoBackHome = () => {
    navigate('home');
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <MealHeader 
        title="Refeição"
        backgroundColor={COLORS.GREEN_MID}
        onPress={handleGoBackHome}
      />

      <Container>
        <ContainerInfoMeal>
          <Title>{infoMeal?.name}</Title>
          <Text>{infoMeal?.description}</Text>
          <Subtitle>Data e hora</Subtitle>
          <Text>{formattedDate} às {infoMeal?.time}</Text>
          
          <FlexDirection>
            {infoMeal?.insideDiet && (
              <>
                <StatusMeal status={infoMeal.insideDiet} />
                <NameIndicator>{infoMeal.insideDiet === 'GOOD' ? 'dentro da dieta' : 'fora da dieta'}</NameIndicator>
              </>
            )}  
          </FlexDirection>
        </ContainerInfoMeal>

        <ContainerButtons>
          <Button 
            title="Editar refeição"
            icon="edit-3"
          />

          <Button 
            title="Excluir refeição"
            icon="trash-2"
            colors="SECONDARY"
          />
        </ContainerButtons>
      </Container>
    </ScrollView>
  )
}