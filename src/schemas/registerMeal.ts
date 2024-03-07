import * as yup from 'yup';

export const registerMeal = () => {
  return yup.object({
    name: yup.string().trim().matches(/^[^\d]*$/, 'O nome não deve conter números.').required('Informe o nome da refeição.'),
    description: yup.string().min(5, 'Uma descrição de refeição deve ter pelo o menos 5 caracters.').required('Informe uma descrição para a refeição.'),
    date: yup.string().required('Informe a data da refeição.'),
    time: yup.string().required('Informe a hora da refeição.'),
    insideDiet: yup.string().oneOf(['GOOD', 'BAD']).required('Selecione se está dentro da dieta.'),
   })
}