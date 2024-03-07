import { useState, useRef } from 'react';
import { ScrollView, TextInput } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { Controller } from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';

import { MealHeader } from '@components/MealHeader';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { InsideDiet } from '@components/InsideDiet';

import { getTime } from '@utils/getTime';
import { useRegisterMealForm } from '@hooks/useRegisterMealForm';

import { Container, ContainerButton, FlexDirection, Subtitle } from './styles';
import { format } from 'date-fns';

export const NewMeal = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const DateInputRef = useRef<TextInput>(null);
  
  const { control, handleSubmit, setValue, errors, onSubmit } = useRegisterMealForm();
  const { COLORS } = useTheme();
  const { navigate } = useNavigation();

  const handleGoBackHome = () => {
    navigate('home');
  };

  const handleConfirmDate = (date: Date) => {
    const formatDate = format(date, 'dd.MM.yyyy');

    setShowDatePicker(false);
    setValue('date', formatDate);

    handleCloseDatePicker();
  };

  const handleCloseDatePicker = () => {
    DateInputRef.current?.blur(); 
  };

  const handleConfirmTime = (date: Date) => {
    const time = getTime(date);
    setShowTimePicker(false);
    setValue('time', time);
    handleCloseTimePicker();
  };

  const handleCloseTimePicker = () => {
    DateInputRef.current?.blur(); 
  };


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
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.name?.message}
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
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              height={120} 
              multiline 
              textAlignVertical="top" 
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              errorMessage={errors.description?.message}
            />
          )}
        /> 

        <FlexDirection direction="row">
          { showDatePicker && (
            <DateTimePicker
              value={new Date()}
              mode="date"
              display="calendar"
              maximumDate={new Date()}
              onChange={(event, selectedDate) => {
                if (selectedDate) {
                  handleConfirmDate(selectedDate);
                } else {
                  handleCloseTimePicker();
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
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  inputRef={DateInputRef}
                  onFocus={() => setShowDatePicker(true)}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  errorMessage={!value ? errors.date?.message : null}
                  caretHidden
                />
              )}
            /> 
          </FlexDirection>
          
          { showTimePicker && (
            <DateTimePicker
              value={new Date()}
              mode="time"
              display="spinner"
              onChange={(event, selectedTime) => {
                if (selectedTime) {
                  handleConfirmTime(selectedTime);
                } else {
                  handleCloseDatePicker();
                }
              }}
            />
          )}

          <FlexDirection direction="column">
            <Subtitle>Hora</Subtitle>
            <Controller 
              control={control}
              name="time"
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  inputRef={DateInputRef}
                  onFocus={() => setShowTimePicker(true)}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  errorMessage={!value ? errors.time?.message : null}
                  caretHidden
                />
              )}
            /> 
          </FlexDirection>
        </FlexDirection>

        <FlexDirection direction="column">
          <Subtitle>Está dentro da dieta?</Subtitle>
          <Controller 
            control={control}
            name="insideDiet"
            rules={{
              required: true,
            }}
            render={() => (
              <InsideDiet
                onChange={(value: string) => setValue('insideDiet', value === 'Sim' ? 'GOOD' : 'BAD')}
                errorMessage={errors.insideDiet?.message}
              />
          )}
        />
        </FlexDirection>
        
        <ContainerButton>
          <Button 
            title="Cadastrar Refeição" 
            onPress={handleSubmit(onSubmit)} 
          />
        </ContainerButton>

      </Container>
    </ScrollView>
  )
}