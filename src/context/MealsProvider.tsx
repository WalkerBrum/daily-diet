import { ReactNode, createContext, useCallback, useState } from 'react';
import { Alert } from 'react-native';

import { MealsDTO } from '@dtos/MealsDTO';
import { mealGetAll } from '@storage/mealGetAll';

type ProviderContextProps = {
  children: ReactNode;
}

type InsideDietType = 'GOOD' | 'BAD';

type MealsContextDataProps = {
  meals: MealsDTO[];
  loading: boolean;
  insideDiet: InsideDietType;
  fetchMeals: () => void;
  getInsideDiet: (insideDiet: InsideDietType) => void;
}

export const MealsContext = createContext({} as MealsContextDataProps);

export const MealsProvider = ({children} : ProviderContextProps) => {
  const [meals, setMeals] = useState<MealsDTO[]>([]);
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
  
  return (
    <MealsContext.Provider value={{ 
      meals, 
      loading,
      insideDiet,
      fetchMeals,
      getInsideDiet 
    }}>
      {children}
    </MealsContext.Provider>
  )
} 