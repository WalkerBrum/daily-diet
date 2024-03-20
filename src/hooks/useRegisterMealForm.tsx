import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from "@react-navigation/native";

import { registerMeal } from "@schemas/registerMeal";
import { NewMealDTO } from "@dtos/NewMealDTO";
import { mealCreate } from "@storage/mealCreate";
import { useMealsContext } from "./useMealsContext";

export const useRegisterMealForm = () => {
  const schema = registerMeal();

  const { control, handleSubmit, setValue, formState: { errors } } = useForm<NewMealDTO>({
    resolver: yupResolver(schema)
  })

  const { navigate } = useNavigation();
  const { getInsideDiet } = useMealsContext();

  const onSubmit = (data: NewMealDTO) => {
    mealCreate(data);
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