import { Platform } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: ${Platform.OS === 'ios' ? RFValue(80) : 40}px;

  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Poppins500};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const Form = styled.View`
  flex: 1;
  justify-content: space-between;
  width: 100%;
  padding: 24px;
`;

export const Fields = styled.View``;

export const TransactionButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 16px;
`;
