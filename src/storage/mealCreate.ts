import AsyncStorage from '@react-native-async-storage/async-storage';

import { NewMealDTO } from '@dtos/NewMealDTO';
import { mealGetAll } from './mealGetAll';
import { MEALS_COLLECTION } from './storageConfig';
import { MealsDTO } from '@dtos/MealsDTO';
import { transformNumber } from '@utils/tranformNumber';

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

      storageMeals[mealIndex].data.sort((time1, time2) => {
        const timeA = transformNumber(time1.time, ':');
        const timeB = transformNumber(time2.time, ':');
        
        if (timeA < timeB) {
          return -1;
        }
  
        return 1;
      });

    } else {
      storageMeals.forEach
      storageMeals.push(dataToStorageOtherDate);
    }

    storageMeals.sort((date1, date2) => {
      const dateA = transformNumber(date1.date, '.')
      const dateB = transformNumber(date2.date, '.')
      
      if (dateA > dateB) {
        return -1;
      }

      return 1;
    });

    await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(storageMeals));

  } catch (error) {
    throw error;
  }
}