import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import { xColors, xFonts } from '../../styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${xColors.blue_light};
`;

export const PlantInfo = styled.View`
  flex: 3;
  width: 80%;
  margin: 0 auto;
  align-items: center;
`;

export const Title = styled.Text`
  margin-top: 10px;
  font-size: 24px;
  line-height: 42px;
  letter-spacing: 1px;
  font-family: ${xFonts.Jost600};
  color: ${xColors.heading};
`;

export const Description = styled.Text`
  font-size: 17px;
  color: ${xColors.body_dark};
  font-family: ${xFonts.Jost400};
  line-height: 25px;
  text-align: center;
  margin-bottom: 25px;
`;

export const ContainerCareMethod = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 10px;
  border-radius: 22px;
  justify-content: space-around;
  background-color: ${xColors.ocean};
`;
export const Img = styled.Image`
  position: relative;
`;
export const CareMethod = styled.Text`
  width: 60%;
  font-size: 15px;
  font-family: ${xFonts.Jost400};
  color: ${xColors.blue};
`;

export const SectionTwo = styled.View`
  flex: 2;
  background-color: ${xColors.blue_light};
  align-items: center;
  justify-content: space-between;
`;

export const DateTimePickerButton = styled.TouchableOpacity`
  width: 80%;
  border-radius: 18px;
  align-items: center;
  padding: 40px 0;
  background-color: ${xColors.ocean};
`;

export const DateTimePickerButtonText = styled.Text`
  font-family: ${xFonts.Jost400};
  line-height: 24px;
  color: ${xColors.blue};
  font-size: 22px;
`;

export const RegisterPlant = styled(RectButton)<RectButtonProps>`
  width: 80%;
  padding: 20px;
  margin: 10px 0 20px 0;
  background-color: ${xColors.green};
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 16px;
`;

export const RegisterPlantText = styled.Text`
  font-size: 18px;
  color: ${xColors.white};
  font-family: ${xFonts.Jost400};
  letter-spacing: 2px;
`;
