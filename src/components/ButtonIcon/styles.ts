import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { ColorProps } from 'src/@types/colors';

export const Container = styled(TouchableOpacity)`
  position: absolute;
  top: 56px;
  left: 24px;
`;

export const Icon = styled(Feather).attrs<ColorProps>(({ theme, color }) => ({
  size: 24,
  color: color === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK 
}))``;

