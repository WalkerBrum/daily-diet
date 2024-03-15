import { MealsDTO } from "@dtos/MealsDTO";

export const bestSequenceInsideDiet = (meals: MealsDTO[]) => {
  let bestSequence = 0;
  let sequence = 0;

  meals.forEach(meal => {
    meal.data.forEach(diet => {

      if (diet.insideDiet === 'GOOD') {
        sequence++;

        if (sequence > bestSequence) {
          bestSequence = sequence;
        }
      } else {
        sequence = 0;
      }
    })
  })

  return bestSequence;
}