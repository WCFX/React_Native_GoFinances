import { TouchableOpacity } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  /* width: 100%;
  padding: 16px 18px;

  font-family: ${({ theme }) => theme.fonts.Roboto500};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.title};

  background-color: ${({ theme }) => theme.colors.shape};

  border-radius: 5px;
  margin-bottom: 8px; */
`;

export const Title = styled.Text``;