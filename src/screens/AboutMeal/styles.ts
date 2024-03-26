import styled, { css } from 'styled-components/native';

export type StatusMealStyleProps = 'GOOD' | 'BAD';

type StatusMealProps = {
  status: StatusMealStyleProps;
};

export const Container = styled.View`
  flex: 1;
  margin-top: -23px;
  padding: 16px 24px;
  border-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ContainerInfoMeal = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  margin-top: 24px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.FONT_24}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
    line-height: ${theme.FONT_SIZE.FONT_32 * 1.3}px;
  `};
`;

export const Text = styled.Text`
  margin-top: 8px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.FONT_16}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `};
`;

export const Subtitle = styled.Text`
  margin-top: 24px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.FONT_16}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_600};
  `};
`;

export const FlexDirection = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  margin-top: 24px;
  padding: 8px 16px;
  width: 160px;

  border-radius: 1000px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const StatusMeal = styled.View<StatusMealProps>`
  width: 8px;
  height: 8px;

  border-radius: 999px;

  background-color: ${({ theme, status }) => status === 'GOOD' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_MID};
`;

export const NameIndicator = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.FONT_16}px;
  `};
`;

export const ContainerButtons = styled.View`
  gap: -6px;
`;



