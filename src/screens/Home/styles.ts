import styled from 'styled-components/native';

import { xColors, xFonts } from '../../styles';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;
export const ContainerSection = styled.View`
  margin-top: 20px;
  width: 300px;
  height: 150px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 32px;
  text-align: center;
  font-family: ${xFonts.Jost600};
  color: ${xColors.body_dark};
`;

export const Banner = styled.Image``;

export const Arrow = styled.Image``;

export const Description = styled.Text`
  font-size: 18px;
  font-family: ${xFonts.Jost600};
  color: ${xColors.body_dark};
`;

export const ButtonSubmit = styled.TouchableOpacity`
  height: 60px;
  width: 60px;
  background: ${xColors.green};
  border: none;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

export const ButtonSubmitText = styled.Text``;
