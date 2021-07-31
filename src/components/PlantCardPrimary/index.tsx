import React from 'react';

import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgUri } from 'react-native-svg';

import * as S from './styles';

interface ContainerPlantsProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  };
}

const PlantCardPrimary = ({ data, ...rest }: ContainerPlantsProps) => {
  return (
    <S.Plant {...rest}>
      <SvgUri uri={data.photo} width={100} height={100} />
      <S.PlantText>{data.name}</S.PlantText>
    </S.Plant>
  );
};

export default PlantCardPrimary;
