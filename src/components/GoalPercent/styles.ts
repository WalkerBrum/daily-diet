import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export type backgroundColorStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  backgroundColor: backgroundColorStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
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
`;

export const Icon = styled(Feather).attrs<Props>(({ theme, backgroundColor }) => ({
  size: 24,
  color: backgroundColor === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK 
}))`
  position: absolute;
  top: 8px;
  right: 8px;
`;