import { TouchableOpacityProps } from "react-native";

import { Container, MealName, StatusMeal, StatusMealStyleProps, Time } from "./styles";

export type DataProps = {
  time: string;
  mealName: string;
  status: StatusMealStyleProps;
}

type MealCardProps = TouchableOpacityProps & {
  data: DataProps
}

export const MealCard = ({ data, ...rest }: MealCardProps) => {
  return (
    <Container {...rest}>
      <Time>{data.time}</Time>
      <MealName>{data.mealName}</MealName>
      <StatusMeal status={data.status} />
    </Container>
  )
}