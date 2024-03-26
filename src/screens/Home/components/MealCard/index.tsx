import { TouchableOpacityProps } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useMealsContext } from "@hooks/useMealsContext";

import { Container, MealName, StatusMeal, StatusMealStyleProps, Time } from "./styles";


type MealCardProps = TouchableOpacityProps & {
  id: string;
  time: string;
  mealName: string;
  status: StatusMealStyleProps;
}

export const MealCard = ({ time, id, mealName, status, ...rest }: MealCardProps) => {
  const { getInfoMeal } = useMealsContext();
  const { navigate } = useNavigation();

  const handleInfoMeal = () => {
    getInfoMeal(id);

    navigate('aboutMeal');
  }
  
  return (
    <Container
      onPress={handleInfoMeal} 
      {...rest}
    >
      <Time>{time}</Time>
      <MealName>{mealName}</MealName>
      <StatusMeal status={status} />
    </Container>
  )
}