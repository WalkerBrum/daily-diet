import { useTheme } from "styled-components"
import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import { Container, FlexRow, Subtitle } from "./styles"
import { GoalPercent } from "@components/GoalPercent"

export const MealStatistics = () => {
  const { COLORS } = useTheme()
  return (
    <>
      <Header />

      <Container>
        <Subtitle>Estatísticas gerais</Subtitle>

        <Dashboard
          title="22"
          subtitle="melhor sequência de pratos dentro da dieta" 
          backgroundColor={COLORS.GRAY_200}
        />

        <Dashboard
          title="109"
          subtitle="refeições registradas" 
          backgroundColor={COLORS.GRAY_200}
        />

        <FlexRow>
          <Dashboard
            title="99"
            subtitle="refeições dentro da dieta"
            height={107} 
            backgroundColor={COLORS.GREEN_LIGHT}
          />

          <Dashboard
            title="10"
            subtitle="refeições fora da dieta"
            height={107}  
            backgroundColor={COLORS.RED_LIGHT}
          />
        </FlexRow>
      </Container>
    </>
  )
}