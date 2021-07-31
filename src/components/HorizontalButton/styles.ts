import { StyleSheet } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import { xColors, xFonts } from '../../styles';

export const styles = StyleSheet.create({
  containerActive: {},
});

export const Button = styled(RectButton)<{ active: boolean }>`
  background-color: ${(props) =>
    props.active ? `${xColors.green_light}` : `${xColors.shape}`};
  width: 86px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin: 5px;
`;

export const ButtonText = styled.Text<{ active: boolean }>`
  color: ${(props) =>
    props.active ? `${xColors.green_dark}` : `${xColors.heading}`};
  font-size: 16px;
  font-family: ${xFonts.Jost600};
`;
