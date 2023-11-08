import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';

type InputProps = {
  height: number
}

export const Container = styled(TextInput)<InputProps>`
  flex: 1;

  min-height: ${(props) => props.height}px;
  max-height: ${(props) => props.height}px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};

  border-radius: 6px;
  padding: 14px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.FONT_16}px;
  `};
`;