import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const Container = styled(TouchableOpacity)`
  position: absolute;
  top: 56px;
  left: 24px;
`;

export const Icon = styled(Feather).attrs(( ) => ({
  size: 24,
}))``;

