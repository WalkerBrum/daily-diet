export type MealsDTO = {
  date: string,
  data: [{
    name: string;
    description: string;
    time: string;
    insideDiet: 'GOOD' | 'BAD';
  }];
};