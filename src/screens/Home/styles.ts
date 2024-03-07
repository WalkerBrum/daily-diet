import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;

  padding: 0 24px;
  margin-bottom: 20px; 
`;

export const Subtitle = styled.Text`
  margin-top: 40px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.FONT_16}px;
  `};
`;

export const Separator = styled.View`
  min-height: 32px;
  max-height: 32px;
`;

export const DailyMeal = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.FONT_18}px;
  `};
  margin-top: 32px;
`;