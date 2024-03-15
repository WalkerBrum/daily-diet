import { ButtonIcon } from '@components/ButtonIcon';
import { useTheme } from 'styled-components';

import { Container, SubTitleHeader, TitleHeader } from './styles';
import { ColorTypeStyleProps } from 'src/@types/colors';
import { useMealsContext } from '@hooks/useMealsContext';
import { percentInsideDiet } from '@utils/percentInsideDiet';
import { Loading } from '@components/Loading';
import { NoMealRecord } from '@components/NoMealRecord';

type HeaderProps = {
  onPress: () => void;
}

export const Header = ({ onPress }: HeaderProps) => {
  const { COLORS } = useTheme();
  const { meals, loading } = useMealsContext();

  const percentDiet = percentInsideDiet(meals);

  const backgroundColor = percentDiet <= 50 ? 'SECONDARY' : 'PRIMARY';

  const colorIcon = backgroundColor === 'PRIMARY' ? COLORS.GREEN_DARK : COLORS.RED_DARK;

  return (
    <Container color={backgroundColor}>
      <ButtonIcon icon="arrow-left" color={colorIcon} onPress={onPress} />

      {!isNaN(percentDiet) ? (
        <>
          {loading ? (
            <Loading />
          ) : (
            <TitleHeader>{percentDiet}%</TitleHeader>
          )}
          <SubTitleHeader>das refeições dentro da dieta</SubTitleHeader>
        </>
      ) : (
        <NoMealRecord />
      )}

    </Container>
  )
}