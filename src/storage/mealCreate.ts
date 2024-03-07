import AsyncStorage from '@react-native-async-storage/async-storage';

import { NewMealDTO } from '@dtos/NewMealDTO';
import { mealGetAll } from './mealGetAll';
import { MEALS_COLLECTION } from './storageConfig';
import { MealsDTO } from '@dtos/MealsDTO';

export const mealCreate = async (data: NewMealDTO) => {
  try {
    const dataToStorageSameDate = {
      name: data.name,
      description: data.description,
      time: data.time,
      insideDiet: data.insideDiet,
    };

    const dataToStorageOtherDate: MealsDTO = {
      date: data.date,
      data: [dataToStorageSameDate]
    }

    let storageMeals = await mealGetAll();

    const mealIndex = storageMeals.findIndex(meal => meal.date === data.date);

    if (mealIndex !== -1) {
      storageMeals[mealIndex].data.push(dataToStorageSameDate);
    } else {
      storageMeals.push(dataToStorageOtherDate);
    }

    await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(storageMeals));
  } catch (error) {
    throw error;
  }
}