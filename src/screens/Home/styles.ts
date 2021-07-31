import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text`
  font-size: 32px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.Montserrat700};
  color: ${({ theme }) => theme.colors.shape};
`;
