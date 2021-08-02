import { TouchableOpacity } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';

import { Props } from '.';

export const Container = styled(TouchableOpacity)`
  width: 48%;
  flex-direction: row;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors.text};
  justify-content: center;
  padding: 16px;

  border-radius: 12px;
`;

export const Icon = styled(Feather)<Pick<Props, 'type'>>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;
  color: ${({ theme, type }) =>
    type === 'up' ? theme.colors.success : theme.colors.attention};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Roboto400};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.title};
`;
