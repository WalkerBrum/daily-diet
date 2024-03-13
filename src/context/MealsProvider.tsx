import { MealsDTO } from '@dtos/MealsDTO';
import { useFocusEffect } from '@react-navigation/native';
import { mealGetAll } from '@storage/mealGetAll';
import { ReactNode, createContext, useCallback, useState } from 'react';
import { Alert } from 'react-native';

type ProviderContextProps = {
  children: ReactNode;
}

type MealsContextDataProps = {
  meals: MealsDTO[];
  loading: boolean;
  fetchMeals: () => void;
}

export const MealsContext = createContext({} as MealsContextDataProps);

export const MealsProvider = ({children} : ProviderContextProps) => {
  const [meals, setMeals] = useState<MealsDTO[]>([]);
  const [loading, setLoading] = useState(true);
 
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
  
  return (
    <MealsContext.Provider value={{ 
      meals, 
      loading,
      fetchMeals 
    }}>
      {children}
    </MealsContext.Provider>
  )
} 