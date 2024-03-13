import { MealsDTO } from "@dtos/MealsDTO";

export const percentInsideDiet = (meals: MealsDTO[]) => {
  let insideDiet = 0;
  let totalMeal = 0;

  meals.forEach(meal => {
    meal.data.forEach(data => {
      totalMeal++;

      if (data.insideDiet === 'GOOD') insideDiet++
    })
  })

  const insideDietPercent = (insideDiet / totalMeal) * 100;
  const formattedPercent = parseFloat(insideDietPercent.toFixed(2));

  return formattedPercent;
}