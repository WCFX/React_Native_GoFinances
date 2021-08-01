import { RFValue } from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};

  width: ${RFValue(300)}px;
  border: 2px solid ${({ theme }) => theme.colors.background};

  border-radius: 5px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  margin: ${RFValue(10)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Poppins400};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(40)}px;
  /* color: ${({ theme }) =>
    'sucess' ? theme.colors.success : theme.colors.attention}; */
  color: ${({ theme }) => theme.colors.success};
`;

export const Footer = styled.View``;

export const Amount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Poppins500};
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.title};
  margin-top: ${RFValue(36)}px;
`;

export const LastTransaction = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Poppins400};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text};
`;
