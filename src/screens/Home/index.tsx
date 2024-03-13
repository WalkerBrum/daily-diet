import { useCallback, useState } from 'react';
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

export const Home = () => {
  const { navigate } = useNavigation();
  const [meals, setMeals] = useState<MealsDTO[]>([]);
  const [loading, setLoading] = useState(true);
 
  const fetchMeals = async () => {
    try {
      setLoading(true);

      const storageMeals = await mealGetAll();

      setMeals(storageMeals)

    } catch (error) {
      console.log(error);
      Alert.alert('Refeições', 'Não foi possível carregar as refeições');

    } finally {
      setLoading(false);
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
      
      { meals.length === 0 ? <NoMealRecord />        
          :
        loading ? <Loading /> 
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