import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from "@react-navigation/native";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import { registerMeal } from "@schemas/registerMeal";
import { NewMealDTO } from "@dtos/NewMealDTO";
import { mealCreate } from "@storage/mealCreate";
import { useMealsContext } from "@hooks/useMealsContext";
import { SchemaNewMealDTO } from "@dtos/SchemaNewMealDTO";

export const useRegisterMealForm = () => {
  const schema = registerMeal();

  const { control, handleSubmit, setValue, formState: { errors } } = useForm<SchemaNewMealDTO>({
    resolver: yupResolver(schema)
  })

  const { navigate } = useNavigation();
  const { getInsideDiet } = useMealsContext();

  const onSubmit = (data: SchemaNewMealDTO) => {
    const newMeal = {...data, id: uuidv4()}
    console.log(newMeal);
    mealCreate(newMeal);
    getInsideDiet(data.insideDiet);
    navigate('statusCreateMeal');
  }

  return {
    control,
    handleSubmit,
    setValue,
    errors,
    onSubmit
  }
}