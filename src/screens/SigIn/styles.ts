import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 70%;
  background-color: ${({ theme }) => theme.colors.primary};

  justify-content: flex-start;
  align-items: center;
  padding-top: ${RFValue(48)}px;
`;

export const TitleWrapper = styled.Text`
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Poppins500};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(30)}px;

  text-align: center;
  margin-top: 45px;
`;

export const SignInTitle = styled.Text``;

export const Footer = styled.View``;
