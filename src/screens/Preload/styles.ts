import styled from 'styled-components/native';

import { xColors, xFonts } from '../../styles';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${xColors.green};
`;

export const Title = styled.Text`
  font-size: 28px;
  color: ${xColors.green_dark};
  font-family: ${xFonts.Jost600};
`;

export const TitleColor = styled.Text`
  color: ${xColors.white};
  font-family: ${xFonts.Jost600};
`;
