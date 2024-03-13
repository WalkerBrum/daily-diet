import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type ButtonProps = {
  colors: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  flex: 1;

  align-items: center;
  justify-content: center;
  flex-direction: row;

  min-height: 50px;
  max-height: 50px;
  gap: 12px;

  margin: 8px 0;
  border-radius: 6px;

  background-color: ${({ theme, colors }) => colors === 'PRIMARY' ? theme.COLORS.GRAY_700 : theme.COLORS.GRAY_100};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_700}
`;

export const Title = styled.Text<ButtonProps>`
  ${({ theme, colors }) => css`
    font-size: ${theme.FONT_SIZE.FONT_14}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${colors === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700};
  `};
`;

export const Icon = styled(Feather).attrs<ButtonProps>(({ theme, colors }) => ({
  color: colors === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700,
  size: theme.FONT_SIZE.FONT_18
}))``;