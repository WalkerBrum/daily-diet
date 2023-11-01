import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type StatusMealStyleProps = 'GOOD' | 'BAD';

type StatusMealProps = {
  status: StatusMealStyleProps;
}

export const Container = styled(TouchableOpacity)`
  min-height: 49px;
  max-height: 49px;

  flex-direction: row;
  align-items: center;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_100 };
    border: 1px solid ${theme.COLORS.GRAY_300};
    color: ${theme.COLORS.GRAY_600};
  `};
  
  margin-top: 8px;
  padding: 14px 16px 14px 12px;
  border-radius: 6px;
`;

export const Time = styled.Text`
  padding-right: 12px;
  border-right-width: 1px; 
  

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.FONT_12}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_600};
    border-right-color: ${theme.COLORS.GRAY_300};
  `};
`;

export const MealName = styled.Text`
  flex: 1;
  padding-left: 12px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.FONT_16}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `};
`;

export const StatusMeal = styled.View<StatusMealProps>`
  width: 14px;
  height: 14px;

  border-radius: 999px;

  background-color: ${({ theme, status }) => status === 'GOOD' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;