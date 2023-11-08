import { useState } from 'react';
import { FlatList } from 'react-native';

import { Container } from './styles';
import { InputOption } from '@components/InputOption';

export const InsideDiet = () => {
  const [insideDiet, setInsideDiet] = useState('')
  return (
    <Container>
      <FlatList 
        data={['Sim', 'Não']}
        keyExtractor={item => item}
        renderItem={({ item }) => 
          <InputOption
            title={item}
            isActive={item === insideDiet}
            onPress={() => setInsideDiet(item)}
          />
        }
        horizontal
        contentContainerStyle={{ flexGrow: 1, gap: 8 }}
      />
    </Container>
  )
}