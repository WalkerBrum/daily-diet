import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEALS_COLLECTION } from './storageConfig';
import { MealsDTO } from '@dtos/MealsDTO';

export const mealGetAll = async () => {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);
    const meals: MealsDTO[] = storage ? JSON.parse(storage) : [];

    return meals;

  } catch (error) {
    throw error;
  }
}