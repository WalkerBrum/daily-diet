import { ButtonIcon } from '@components/ButtonIcon';

import { Container, SubTitleHeader, TitleHeader } from './styles';
import { ColorTypeStyleProps } from 'src/@types/colors';

type HeaderProps = {
  backgroundColor?: ColorTypeStyleProps
}

export const Header = ({ backgroundColor = 'PRIMARY' }: HeaderProps) => {
  return (
    <Container>
      <ButtonIcon icon="arrow-left" type={backgroundColor}/>
      <TitleHeader>90,86%</TitleHeader>
      <SubTitleHeader>das refeições dentro da dieta</SubTitleHeader>
    </Container>
  )
}