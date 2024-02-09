import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  gap: 3px;
`;

export const MessageError = styled.Text`
  margin: 4px;
  
  ${({ theme }) => css`
    color: ${theme.COLORS.RED_DARK};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.FONT_14}px;
  `};
`;