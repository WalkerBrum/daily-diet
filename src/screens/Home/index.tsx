import { useCallback, useContext, useState } from 'react';
import { SectionList, Alert } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { Header } from '@components/Header';
import { GoalPercent } from '@components/GoalPercent';
import { Button } from '@components/Button';
import { MealCard } from './components/MealCard';
import { Loading } from '@components/Loading';
import { NoMealRecord } from '@components/NoMealRecord';

import { mealGetAll } from '@storage/mealGetAll';
import { MealsDTO } from '@dtos/MealsDTO';

import { Container, DailyMeal, Subtitle } from './styles';
import { MealsContext } from '@context/MealsProvider';

export const Home = () => {
  const { navigate } = useNavigation();
  const { meals, loading, fetchMeals } = useContext(MealsContext)

  const handleMealStatistics = () => {
    navigate('mealStatistics')
  }

  const handleNewMeal = () => {
    navigate('newMeal')
  }

  useFocusEffect(useCallback(() => {
    fetchMeals()
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
      
      { loading ? <Loading />   
          :
        meals.length === 0 ? <NoMealRecord />      
          : 
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
      }   
    </Container>
  )
}