import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
`;

export const MessageTitle = styled.Text`
  margin-bottom: 8px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.FONT_24}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GREEN_DARK};
    line-height: ${theme.FONT_SIZE.FONT_32 * 1.3}px;
  `};
`;

export const MessageSubtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.FONT_16}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `};
`;

export const PersonIndicatorStatusMeal = styled.Image`
  width: 224px;
  height: 288px;

  margin: 40px 0 32px;
`;

export const ContainerButton = styled.View`
  flex: 1;

  max-height: 50px;
  width: 191px;
`;