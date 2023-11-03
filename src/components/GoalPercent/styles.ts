import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ColorProps } from 'src/@types/colors';

export const Container = styled(TouchableOpacity)<ColorProps>`
  margin-top: 33px;
  padding: 20px 0;

  align-items: center;
  justify-content: center;
  gap: 2px;

  background-color: ${({ theme, color }) => color === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 8px;
`;

export const PercentTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.FONT_32}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
    line-height: ${theme.FONT_SIZE.FONT_32 * 1.3}px;
  `};
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.FONT_14}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `};
`;

export const Icon = styled(Feather).attrs<ColorProps>(({ theme, color }) => ({
  size: 24,
  color: color === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK 
}))`
  position: absolute;
  top: 8px;
  right: 8px;
`;