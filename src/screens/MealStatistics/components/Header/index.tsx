import { ButtonIcon } from '@components/ButtonIcon';
import { useTheme } from 'styled-components';

import { Container, SubTitleHeader, TitleHeader } from './styles';
import { ColorTypeStyleProps } from 'src/@types/colors';

type HeaderProps = {
  backgroundColor?: ColorTypeStyleProps;
  onPress: () => void;
}

export const Header = ({ backgroundColor = 'PRIMARY', onPress }: HeaderProps) => {
  const { COLORS } = useTheme();

  const colorIcon = backgroundColor === 'PRIMARY' ? COLORS.GREEN_DARK : COLORS.RED_DARK;

  return (
    <Container color={backgroundColor}>
      <ButtonIcon icon="arrow-left" color={colorIcon} onPress={onPress} />

      <TitleHeader>90,86%</TitleHeader>
      <SubTitleHeader>das refeições dentro da dieta</SubTitleHeader> 
    </Container>
  )
}