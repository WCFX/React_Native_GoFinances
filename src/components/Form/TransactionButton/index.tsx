import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

export interface Props extends TouchableOpacityProps {
  type: 'up' | 'down';
  title: string;
}
const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
};

const TransactionButton = ({ type, title, ...rest }: Props) => {
  return (
    <S.Container {...rest}>
      <S.Icon type={type} name={icons[type]} />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default TransactionButton;
