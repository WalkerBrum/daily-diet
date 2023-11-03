import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  padding: 72px 24px;
  width: 100%;
  height: 200px;
  
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const TitleHeader = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.FONT_32}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
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