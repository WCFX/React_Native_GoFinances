import React from 'react';

import * as S from './styles';

import { Input } from '../../components';

const Register = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Cadastro</S.Title>
      </S.Header>

      <S.Form>
        <Input placeholder="Nome" />
        <Input placeholder="Email" />
      </S.Form>
    </S.Container>
  );
};

export default Register;
