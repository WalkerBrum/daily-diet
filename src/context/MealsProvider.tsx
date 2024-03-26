import { ReactNode, createContext, useCallback, useState } from 'react';
import { Alert } from 'react-native';

import { MealsDTO } from '@dtos/MealsDTO';
import { mealGetAll } from '@storage/mealGetAll';
import { NewMealDTO } from '@dtos/NewMealDTO';

type ProviderContextProps = {
  children: ReactNode;
}

type InsideDietType = 'GOOD' | 'BAD';

type MealsContextDataProps = {
  meals: MealsDTO[];
  infoMeal: NewMealDTO | undefined;
  loading: boolean;
  insideDiet: InsideDietType;
  fetchMeals: () => void;
  getInsideDiet: (insideDiet: InsideDietType) => void;
  getInfoMeal: (id: string) => void;
}

export const MealsContext = createContext({} as MealsContextDataProps);

export const MealsProvider = ({children} : ProviderContextProps) => {
  const [meals, setMeals] = useState<MealsDTO[]>([]);
  const [infoMeal, setInfoMeal] = useState<NewMealDTO | undefined>();
  const [loading, setLoading] = useState(true);
  const [insideDiet, setInsideDiet] = useState<InsideDietType>('GOOD');
 
  const fetchMeals = async () => {
    try {
      setLoading(true);

      const storageMeals = await mealGetAll();

      setMeals(storageMeals)

    } catch (error) {
      console.log(error);
      Alert.alert('Refeições', 'Não foi possível carregar as refeições');

    } finally {
      setLoading(false);
    }
  }

  const getInsideDiet = (insideDiet: InsideDietType) => {
    setInsideDiet(insideDiet);
  }

  const getInfoMeal = async (id: string) => {
    const storageMeals = await mealGetAll();

    storageMeals.forEach(mealInDate => {
      mealInDate.data.forEach(meal => {
        if (meal.id === id) {
          const infoMeal = {
            id: meal.id,
            name: meal.name,
            description: meal.description,
            date: mealInDate.date,
            time: meal.time,
            insideDiet: meal.insideDiet,
          };

          setInfoMeal(infoMeal);
        }
      })
    })
  }
  
  return (
    <MealsContext.Provider value={{ 
      meals,
      infoMeal, 
      loading,
      insideDiet,
      fetchMeals,
      getInsideDiet,
      getInfoMeal
    }}>
      {children}
    </MealsContext.Provider>
  )
} 