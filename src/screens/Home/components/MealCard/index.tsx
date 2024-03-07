import { TouchableOpacityProps } from "react-native";

import { Container, MealName, StatusMeal, StatusMealStyleProps, Time } from "./styles";


type MealCardProps = TouchableOpacityProps & {
  time: string;
  mealName: string;
  status: StatusMealStyleProps;
}

export const MealCard = ({ time, mealName, status, ...rest }: MealCardProps) => {
  return (
    <Container {...rest}>
      <Time>{time}</Time>
      <MealName>{mealName}</MealName>
      <StatusMeal status={status} />
    </Container>
  )
}