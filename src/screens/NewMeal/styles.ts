import styled, { css } from 'styled-components/native';

type FlexDirectionProps = {
  direction: string;
}

export const Container = styled.View`
  flex: 1;

  margin-top: -23px;
  padding: 16px 24px 0 24px;
  border-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Subtitle = styled.Text`
  margin-top: 24px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.FONT_14}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_600};
    line-height: ${theme.FONT_SIZE.FONT_32 * 1.3}px;
  `};
`;

export const FlexDirection = styled.View<FlexDirectionProps>`
  flex: 1;

  flex-direction: ${(props) => props.direction};
  gap: ${(props) => props.direction === "row" ? 20 : 0 }px;

  max-height: 107px;
`;

export const ContainerButton = styled.View`
  flex: 1;
  
  margin-top: 80px;
`

