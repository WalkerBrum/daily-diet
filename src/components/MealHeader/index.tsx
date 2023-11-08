import { useTheme } from "styled-components"
import { Container, TitleMealHeader } from "./styles"
import { ButtonIcon } from "@components/ButtonIcon"

type MealHeader = {
  backgroundColor: string
  title: string
}

export const MealHeader = ({ backgroundColor, title }: MealHeader) => {
  const { COLORS } = useTheme();

  return (
    <Container backgroundColor={backgroundColor}>
      <ButtonIcon icon="arrow-left" color={COLORS.GRAY_600} />

      <TitleMealHeader>{title}</TitleMealHeader>
    </Container>
  )
}