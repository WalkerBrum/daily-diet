import { MealsDTO } from "@dtos/MealsDTO";

export const infoMeals = (meals: MealsDTO[]) => {
  let insideDiet = 0;
  let totalMeals = 0;

  meals.forEach(meal => {
    meal.data.forEach(diet => {
      totalMeals++;

      if (diet.insideDiet === 'GOOD') insideDiet++
    })
  })

  const outOfTheDiet = totalMeals - insideDiet;

  return {
    totalMeals,
    insideDiet,
    outOfTheDiet,
  }
}