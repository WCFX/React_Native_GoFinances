import styled from 'styled-components/native';

import { xColors, xFonts } from '../../styles';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const ContainerInfo = styled.View``;

export const Title = styled.Text`
  font-size: 28px;
  line-height: 38px;
  font-family: ${xFonts.Poppins400};
  color: ${xColors.body_dark};
`;

export const Name = styled(Title)`
  font-family: ${xFonts.Poppins700};
  color: ${xColors.body_dark};
`;

export const ContainerPic = styled.View`
  border: 2px solid green;
  border-radius: 50px;
`;

export const ProfileAvatar = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 50px;
`;
