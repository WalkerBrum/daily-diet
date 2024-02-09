import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from "@react-navigation/native";

import { registerMeal } from "@schemas/registerMeal";

export type RegisterMealFormDataProps = {
  name: string;
  description: string;
  date: string;
  time: string;
  insideDiet: boolean;
}

export const useRegisterMealForm = () => {
  const schema = registerMeal();

  const { control, handleSubmit, setValue, formState: { errors } } = useForm<RegisterMealFormDataProps>({
    resolver: yupResolver(schema)
  })

  const { navigate } = useNavigation();

  const onSubmit = (data: RegisterMealFormDataProps) => {
    console.log(data);
    navigate('home');
  }

  return {
    control,
    handleSubmit,
    setValue,
    errors,
    onSubmit
  }
}