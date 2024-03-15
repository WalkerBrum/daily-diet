import { MealsDTO } from "@dtos/MealsDTO";
import { infoMeals } from "./infoMeals";

export const percentInsideDiet = (meals: MealsDTO[]) => {
  const {totalMeals, insideDiet} = infoMeals(meals);

  const insideDietPercent = (insideDiet / totalMeals) * 100;
  const formattedPercent = parseFloat(insideDietPercent.toFixed(2));

  return formattedPercent;
}