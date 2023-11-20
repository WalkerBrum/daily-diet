import React from 'react';
import { FlatList } from 'react-native';
import { Controller, Control, FieldValues } from 'react-hook-form';
import { Container } from './styles';
import { InputOption } from '@components/InputOption';

type InsideDietProps = {
  control: Control<FieldValues, object>;
};

export const InsideDiet = ({ control }: InsideDietProps) => {

  const options = [
    { key: 'Sim', label: 'Sim' },
    { key: 'Não', label: 'Não' },
  ];

  return (
    <Controller
      control={control}
      render={({ field: { onChange, value } }) => (
        <Container>
          <FlatList
            data={options}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <InputOption
                title={item.label}
                isActive={item.label === value}
                onPress={() => onChange(item.label)}
              />
            )}
            horizontal
            contentContainerStyle={{ flexGrow: 1, gap: 8 }}
          />
        </Container>
      )}
      name="insideDiet"
      defaultValue=""
    />
  );
};