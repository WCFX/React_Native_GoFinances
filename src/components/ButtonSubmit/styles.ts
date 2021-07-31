import styled from 'styled-components/native';

import { xColors, xFonts } from '../../styles';

export const ButtonSubmit = styled.TouchableOpacity`
  padding: 15px 40px;
  background: ${xColors.green};
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

export const ButtonSubmitText = styled.Text`
  font-size: 18px;
  color: ${xColors.white};
  text-align: center;
  align-self: center;
  letter-spacing: 2px;
  font-family: ${xFonts.Roboto700};
`;
