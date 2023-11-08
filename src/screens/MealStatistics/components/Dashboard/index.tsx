import { Container, TitleDashboard, SubTitleDashboard } from "./styles";

type DashboardProps = {
  backgroundColor: string;
  title: string;
  subtitle: string;
  height?: number;
}
export const Dashboard = ({ backgroundColor, title, subtitle, height = 89 }: DashboardProps) => {
  return (
    <Container backgroundColor={backgroundColor} height={height}>
      <TitleDashboard>{title}</TitleDashboard>
      <SubTitleDashboard>{subtitle}</SubTitleDashboard>
    </Container>
  )
}