import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { Home } from './src/screens/Home';
import { Loading } from '@components/Loading';

import theme from './src/theme';
import { MealStatistics } from '@screens/MealStatistics';
import { NewMeal } from '@screens/NewMeal';
import { Routes } from './src/routes';


export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold});

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      { fontsLoaded ? <Routes /> : <Loading /> }
    </ThemeProvider>
  );
}


