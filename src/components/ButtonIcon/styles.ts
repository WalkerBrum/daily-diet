import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export type ButtonIconTypeStyleProps = "PRIMARY" | "SECONDARY";

type IconProps = {
  type: ButtonIconTypeStyleProps
}

export const Container = styled(TouchableOpacity)`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const Icon = styled(Feather).attrs<IconProps>(({ theme, type }) => ({
  size: 24,
  color: type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK 
}))``;

