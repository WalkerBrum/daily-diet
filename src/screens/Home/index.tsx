import { useState } from 'react';

import { Header } from '@components/Header';
import { GoalPercent } from '@components/GoalPercent';
import { Button } from '@components/Button';
import { MealCard } from './components/MealCard';

import { Container, DailyMeal, Separator, Subtitle } from './styles';
import { SectionList } from 'react-native';
import { StatusMealStyleProps } from './components/MealCard/styles';
import { useNavigation } from '@react-navigation/native';

type Meals = {
  title: string
  data: {
    time: string
    mealName: string
    status: StatusMealStyleProps
  }[]
}

export const Home = () => {
  const { navigate } = useNavigation();
  const [meals, setMeals] = useState<Meals[]>(
    [
      {
        title: '12.08.22',
        data: [
          {
            time: '09:30',
            mealName: 'Vitamina de banana com abacate',
            status: 'GOOD'
          },
          {
            time: '12:30',
            mealName: 'Salada cesar com frango grelhado',
            status: 'GOOD'
          },
          {
            time: '16:00',
            mealName: 'Whey protein com leite',
            status: 'GOOD'
          },
          {
            time: '20:00',
            mealName: 'x-tudo',
            status: 'BAD'
          },
        ],
    },
    {
      title: '11.08.22',
      data: [
        {
          time: '09:30',
          mealName: 'Vitamina de banana com abacate',
          status: 'GOOD'
        },
        {
          time: '12:30',
          mealName: 'Salada cesar com frango grelhado',
          status: 'GOOD'
        },
        {
          time: '16:00',
          mealName: 'Whey protein com leite',
          status: 'GOOD'
        },
        {
          time: '20:00',
          mealName: 'x-tudo',
          status: 'BAD'
        },
      ],
    },
  ])

  const handleMealStatistics = () => {
    navigate('mealStatistics')
  }

  const handleNewMeal = () => {
    navigate('newMeal')
  }
  return (
    <Container>
      <Header />

      <GoalPercent onPress={handleMealStatistics}/>

      <Subtitle>Refeições</Subtitle>
      <Button 
        icon="plus" 
        title="Nova Refeição"
        onPress={handleNewMeal} 
      />

      <Separator />
      
      <SectionList 
        sections={meals}
        keyExtractor={(item) => item.time}
        renderItem={({ item }) => (
          <MealCard data={item}/>
        )}
        renderSectionHeader={({ section: {title} }) => (
          <DailyMeal>{title}</DailyMeal>
        )}
        showsVerticalScrollIndicator={false}
      />
       
    </Container>
  )
}