import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { Props } from '.';

export const Container = styled.View<Pick<Props, 'color'>>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.shape};

  flex-direction: row;
  justify-content: space-between;

  padding: 13px 24px;

  border-radius: 6px;
  border-left-width: 5px;
  border-bottom-width: 2px;
  elevation: 3;
  border-left-color: ${({ color }) => color};
  border-bottom-color: ${({ color }) => color};

  margin: 8px 0;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Poppins500};
  font-size: ${RFValue(15)}px;
`;

export const Amount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Poppins500};
  font-size: ${RFValue(15)}px;
`;
