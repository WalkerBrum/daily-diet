import styled, { css } from 'styled-components/native';

type ColorProps = {
  backgroundColor: string;
  height: number;
}

export const Container = styled.View<ColorProps>`
  margin-bottom: 12px;
  padding: 16px;
  max-height: ${(props) => props.height}px;

  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.backgroundColor};
  border-radius: 8px;
`;

export const TitleDashboard = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.FONT_24}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `};
`;

export const SubTitleDashboard = styled.Text`
  margin-top: 8px;
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.FONT_14}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `};
`;