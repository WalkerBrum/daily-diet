import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  padding: 33px 24px;
  margin-top: -30px;
  border-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Subtitle = styled.Text`
  text-align: center;
  margin-bottom: 23px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.FONT_14}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `};
`;

export const FlexRow = styled.View`
  flex: 1;
  flex-direction: row;
  gap: 12px;

  max-height: 107px;
`;