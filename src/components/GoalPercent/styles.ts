import styled, { css } from 'styled-components/native';

export type backgroundColorStyleProps = 'PRIMARY' | 'SECONDARY';

type ContainerProps = {
  backgroundColor: backgroundColorStyleProps;
}

export const Container = styled.View<ContainerProps>`
  margin-top: 33px;
  padding: 20px 0;

  align-items: center;
  justify-content: center;
  gap: 2px;

  background-color: ${({ theme, backgroundColor }) => backgroundColor === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 8px;
`;

export const PercentTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.FONT_32}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `};
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.FONT_14}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `};
`