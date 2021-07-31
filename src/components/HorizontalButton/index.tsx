/* eslint-disable react/require-default-props */
import React from 'react';

import { RectButtonProps } from 'react-native-gesture-handler';

import * as S from './styles';

interface HorizontalButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

const HorizontalButton = ({
  title,
  active = false,
  ...rest
}: HorizontalButtonProps) => {
  return (
    <S.Button active={active} {...rest}>
      <S.ButtonText active={active}>{title}</S.ButtonText>
    </S.Button>
  );
};

export default HorizontalButton;
