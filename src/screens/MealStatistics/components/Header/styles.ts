import styled, { css } from 'styled-components/native';

import { ColorProps } from 'src/@types/colors';

export const Container = styled.View<ColorProps>`
  padding: 72px 24px;
  height: 200px;
  
  align-items: center;

  background-color: ${({ theme, color }) => color === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const TitleHeader = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.FONT_32}px;
    color: ${theme.COLORS.GRAY_700};
    line-height: ${theme.FONT_SIZE.FONT_32 * 1.3}px;
  `};
`;

export const SubTitleHeader = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.FONT_14}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `};
`;