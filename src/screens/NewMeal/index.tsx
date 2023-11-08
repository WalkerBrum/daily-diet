import { FlatList, ScrollView } from 'react-native';
import { useTheme } from 'styled-components'

import { MealHeader } from '@components/MealHeader';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { Container, ContainerButton, FlexDirection, Subtitle } from './styles';
import { InsideDiet } from '@components/InsideDiet';

export const NewMeal = () => {
  const { COLORS } = useTheme();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <MealHeader backgroundColor={COLORS.GRAY_300} title="Nova refeição" />

      <Container>
        <Subtitle>Nome</Subtitle>
        <Input />

        <Subtitle>Nome</Subtitle>
        <Input 
          height={120} 
          multiline 
          textAlignVertical="top"
        />

        <FlexDirection direction="row">
          <FlexDirection direction="column">
            <Subtitle>Data</Subtitle>
            <Input />
          </FlexDirection>

          <FlexDirection direction="column">
            <Subtitle>Hora</Subtitle>
            <Input />
          </FlexDirection>
        </FlexDirection>

        <Subtitle>Está dentro da dieta?</Subtitle>
        <InsideDiet />
        
        <ContainerButton>
          <Button title="Cadastrar Refeição" />
        </ContainerButton>

      </Container>
    </ScrollView>
  )
}