import { Container, TitleDashboard, SubTitleDashboard } from "./styles";

type DashboardProps = {
  backgroundColor: string;
  data: number;
  subtitle: string;
  height?: number;
}
export const Dashboard = ({ backgroundColor, data, subtitle, height = 89 }: DashboardProps) => {
  return (
    <Container backgroundColor={backgroundColor} height={height}>
      <TitleDashboard>{data}</TitleDashboard>
      <SubTitleDashboard>{subtitle}</SubTitleDashboard>
    </Container>
  )
}