import { useCallback, useState } from 'react';

import { Header } from '@components/Header';
import { GoalPercent } from '@components/GoalPercent';
import { Button } from '@components/Button';
import { MealCard } from './components/MealCard';

import { SectionList, Alert } from 'react-native';
import { StatusMealStyleProps } from './components/MealCard/styles';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { mealGetAll } from '@storage/mealGetAll';
import { MealsDTO } from '@dtos/MealsDTO';

import { Container, DailyMeal, Separator, Subtitle } from './styles';

type Meals = {
  title: string;
  data: {
    time: string;
    mealName: string;
    status: 'GOOD' | 'BAD';
  }[];
};

export const Home = () => {
  const { navigate } = useNavigation();
  const [meals, setMeals] = useState<MealsDTO[]>([])
  // const [meals, setMeals] = useState<Meals[]>(
  //   [
  //     {
  //       title: '12.08.22',
  //       data: [
  //         {
  //           time: '09:30',
  //           mealName: 'Vitamina de banana com abacate',
  //           status: 'GOOD'
  //         },
  //         {
  //           time: '12:30',
  //           mealName: 'Salada cesar com frango grelhado',
  //           status: 'GOOD'
  //         },
  //         {
  //           time: '16:00',
  //           mealName: 'Whey protein com leite',
  //           status: 'GOOD'
  //         },
  //         {
  //           time: '20:00',
  //           mealName: 'x-tudo',
  //           status: 'BAD'
  //         },
  //       ],
  //   },
  //   {
  //     title: '11.08.22',
  //     data: [
  //       {
  //         time: '09:30',
  //         mealName: 'Vitamina de banana com abacate',
  //         status: 'GOOD'
  //       },
  //       {
  //         time: '12:30',
  //         mealName: 'Salada cesar com frango grelhado',
  //         status: 'GOOD'
  //       },
  //       {
  //         time: '16:00',
  //         mealName: 'Whey protein com leite',
  //         status: 'GOOD'
  //       },
  //       {
  //         time: '20:00',
  //         mealName: 'x-tudo',
  //         status: 'BAD'
  //       },
  //     ],
  //   },
  // ]);

  const fetchMeals = async () => {
    try {
      const storageMeals = await mealGetAll();

      setMeals(storageMeals);

    } catch (error) {
      console.log(error);
      Alert.alert('Refeições', 'Não foi possível carregar as refeições')
    }
  }

  const handleMealStatistics = () => {
    navigate('mealStatistics')
  }

  const handleNewMeal = () => {
    navigate('newMeal')
  }

  useFocusEffect(useCallback(() => {
    fetchMeals()
    console.log(meals)
  }, []));

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
      
      <SectionList 
        sections={meals}
        keyExtractor={(item) => item.time}
        renderItem={({ item }) => (
          <MealCard 
            mealName={item.name}
            time={item.time}
            status={item.insideDiet}
          />
        )}
        renderSectionHeader={({ section: { date } }) => (
          <DailyMeal>{date}</DailyMeal>
        )}
        showsVerticalScrollIndicator={false}
      />
       
    </Container>
  )
}