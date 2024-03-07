import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from "@react-navigation/native";

import { registerMeal } from "@schemas/registerMeal";
import { NewMealDTO } from "@dtos/NewMealDTO";
import { mealCreate } from "@storage/mealCreate";

export const useRegisterMealForm = () => {
  const schema = registerMeal();

  const { control, handleSubmit, setValue, formState: { errors } } = useForm<NewMealDTO>({
    resolver: yupResolver(schema)
  })

  const { navigate } = useNavigation();

  const onSubmit = (data: NewMealDTO) => {
    console.log(data)
    mealCreate(data);
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