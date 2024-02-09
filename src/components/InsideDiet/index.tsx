import { useState } from 'react';
import { FlatList, TextInputProps } from 'react-native';

import { InputOption } from '@components/InputOption';

import { Container, MessageError } from './styles';
import { useRegisterMealForm } from '@hooks/useRegisterMealForm';

type InsideDietProps = {
  errorMessage?: string | undefined;
  onChange: (value: string) => void;
}

export const InsideDiet = ({ errorMessage, onChange }: InsideDietProps) => {
  const [insideDiet, setInsideDiet] = useState<string | undefined>();

  const { setValue } =  useRegisterMealForm()

  const invalid = !!errorMessage;

  const options = [
    { key: 'Sim', label: 'Sim' },
    { key: 'Não', label: 'Não' },
  ];

  const handleSelectdOption = (option: string) => {
    onChange(option);
    setInsideDiet(option);
  }

  return (
    <Container>
      <FlatList 
        data={options}
        keyExtractor={item => item.key}
        renderItem={({ item }) => 
          <InputOption
            title={item.label}
            isActive={item.label === insideDiet}
            onPress={() => handleSelectdOption(item.label)}
          />
        }
        horizontal
        contentContainerStyle={{ flexGrow: 1, gap: 8 }}
      />

      {invalid && (
        <MessageError>{errorMessage}</MessageError>
      )}
    </Container>
  )
};