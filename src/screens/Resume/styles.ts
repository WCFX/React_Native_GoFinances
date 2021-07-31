import styled from 'styled-components/native';

import { xColors, xFonts } from '../../styles';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ContainerContent = styled.View`
  width: 100%;
  padding: 0 20px;
  align-items: center;
`;

export const Emoticon = styled.Text`
  font-size: 52px;
  padding: 20px;
`;
export const Title = styled.Text`
  font-size: 22px;
  color: ${xColors.body_dark};
  font-family: ${xFonts.Jost600};
  text-align: center;
`;

export const Description = styled.Text`
  font-size: 18px;
  padding: 20px;
  color: ${xColors.body_dark};
  font-family: ${xFonts.Jost600};
  text-align: center;
`;
