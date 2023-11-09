import { useTheme } from 'styled-components';

import { ButtonIcon } from '@components/ButtonIcon';

import { Container, TitleMealHeader } from './styles';

type MealHeader = {
  backgroundColor: string;
  title: string;
  onPress: () => void;
}

export const MealHeader = ({ backgroundColor, title, onPress }: MealHeader) => {
  const { COLORS } = useTheme();

  return (
    <Container backgroundColor={backgroundColor}>
      <ButtonIcon 
        icon="arrow-left" 
        color={COLORS.GRAY_600}
        onPress={onPress} 
      />

      <TitleMealHeader>{title}</TitleMealHeader>
    </Container>
  )
}