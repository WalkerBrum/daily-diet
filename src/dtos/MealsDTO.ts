export type MealsDTO = {
  date: string,
  data: [{
    id: string;
    name: string;
    description: string;
    time: string;
    insideDiet: 'GOOD' | 'BAD';
  }];
};