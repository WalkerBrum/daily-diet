export type NewMealDTO = {
  name: string;
  description: string;
  date: string;
  time: string;
  insideDiet: 'GOOD' | 'BAD';
}