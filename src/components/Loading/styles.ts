import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoadIndicator = styled(ActivityIndicator).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_DARK,
  size: theme.FONT_SIZE.FONT_32
}))``;