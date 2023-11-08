import styled, { css } from 'styled-components/native';

type ContainerProps = {
  backgroundColor: string
}

export const Container = styled.View<ContainerProps>`
  padding-top: 57px ;
  height: 132px;
  
  align-items: center;

  background-color: ${(props) => props.backgroundColor};
`;

export const TitleMealHeader = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.FONT_18}px;
    color: ${theme.COLORS.GRAY_700};
  `};
`;