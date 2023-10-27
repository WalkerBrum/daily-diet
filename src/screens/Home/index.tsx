import { Header } from '@components/Header';
import { GoalPercent } from '@components/GoalPercent';

import { Container, Subtitle } from './styles';
import { Button } from '@components/Button';


export const Home = () => {
  return (
    <Container>
      <Header />

      <GoalPercent />

      <Subtitle>Refeições</Subtitle>
      <Button icon="plus" />
    </Container>
  )
}