import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';

type InputProps = {
  height: number;
  error: boolean;
}

export const Container = styled.View`
  gap: 3px;
`;

export const InputText = styled(TextInput)<InputProps>`
  min-height: ${(props) => props.height}px;
  max-height: ${(props) => props.height}px;

  border: 1px solid ${({ error, theme }) => error ? theme.COLORS.RED_DARK : theme.COLORS.GRAY_300};

  border-radius: 6px;
  padding: 14px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.FONT_16}px;
  `};
`;

export const MessageError = styled.Text`
  margin: 4px;
  
  ${({ theme }) => css`
    color: ${theme.COLORS.RED_DARK};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.FONT_14}px;
  `};
`;