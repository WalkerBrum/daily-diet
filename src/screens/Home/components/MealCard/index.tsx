import { TouchableOpacityProps } from "react-native";

import { Container, MealName, StatusMeal, StatusMealStyleProps, Time } from "./styles";
import { useMealsContext } from "@hooks/useMealsContext";


type MealCardProps = TouchableOpacityProps & {
  id: string;
  time: string;
  mealName: string;
  status: StatusMealStyleProps;
}

export const MealCard = ({ time, id, mealName, status, ...rest }: MealCardProps) => {
  const { getInfoMeal } = useMealsContext();

  const handleInfoMeal = () => {
    getInfoMeal(id);
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