import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';


type ContainerProps = {
  isActive: boolean;
  title: string;
}

type StatusIndicatorProps = {
  color: string;
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 164px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 5px;

  padding: 16px;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};

  ${({ theme, isActive, title }) => isActive && css`
    border: 1px solid ${title === 'Sim' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    background-color: ${title === 'Sim' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  `};
`;

export const StatusIndicator = styled.View<StatusIndicatorProps>`
  width: 8px;
  height: 8px;

  border-radius: 99px;

  background-color: ${({ theme, color }) => color === 'Sim' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const NameIndicator = styled.Text`
  ${({ theme }) => css`
      color: ${theme.COLORS.GRAY_700};
      font-family: ${theme.FONT_FAMILY.BOLD};
      font-size: ${theme.FONT_SIZE.FONT_14}px;
  `};
`; 