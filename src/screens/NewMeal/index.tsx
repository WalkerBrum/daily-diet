import { ScrollView } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker'

import { MealHeader } from '@components/MealHeader';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { InsideDiet } from '@components/InsideDiet';

import { Container, ContainerButton, FlexDirection, Subtitle } from './styles';
import { useState } from 'react';

export const NewMeal = () => {
  const [date, setDate] = useState<Date | undefined>();
  const [showPicker, setShowPicker] = useState(false);
  
  const { control, handleSubmit, formState: {errors} } = useForm();
  const { COLORS } = useTheme();
  const { navigate } = useNavigation();

  const handleGoBackHome = () => {
    navigate('home');
  }

  const handleNewMeal = (data: any) => {
    console.log(data);
    navigate('statusCreateMeal');
  }

  const handleConfirmDate = (date: Date) => {
    setShowPicker(false);
    setDate(date);
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <MealHeader 
        backgroundColor={COLORS.GRAY_300} 
        title="Nova refeição"
        onPress={handleGoBackHome} 
      />

      <Container>
        <Subtitle>Nome</Subtitle>
        <Controller 
          control={control}
          name="name"
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              onChangeText={onChange}
              value={value}
            />
          )}
        />        

        <Subtitle>Descrição</Subtitle>
        <Controller 
          control={control}
          name="description"
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              height={120} 
              multiline 
              textAlignVertical="top" 
              onChangeText={onChange}
              value={value}
            />
          )}
        /> 

        <FlexDirection direction="row">
        { showPicker && (
           <DateTimePicker
           value={new Date()}
           mode="date"
           display="calendar"
           onChange={(event, selectedDate) => {
             if (selectedDate) {
               handleConfirmDate(selectedDate);
             }
           }}
         />
        )}

          <FlexDirection direction="column">
            <Subtitle>Data</Subtitle>
            <Controller 
              control={control}
              name="date"
              rules={{
                required: true,
              }}
              render={({ field: { onChange } }) => (
                <Input
                  onFocus={() => setShowPicker(true)} 
                  onChangeText={onChange}
                  value={date && date.toLocaleDateString('PT-br')}
                />
              )}
            /> 
          </FlexDirection>

          <FlexDirection direction="column">
            <Subtitle>Hora</Subtitle>
            <Controller 
              control={control}
              name="hour"
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  onChangeText={onChange}
                  value={value}
                />
              )}
            /> 
          </FlexDirection>
        </FlexDirection>

        <Subtitle>Está dentro da dieta?</Subtitle>
        <InsideDiet control={control} />
        
        <ContainerButton>
          <Button 
            title="Cadastrar Refeição" 
            onPress={handleSubmit(handleNewMeal)} 
          />
        </ContainerButton>

      </Container>
    </ScrollView>
  )
}