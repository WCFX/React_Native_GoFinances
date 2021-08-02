import React from 'react';

import * as S from './styles';

import { Button, Input, TransactionButton } from '../../components';

const Register = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Cadastro</S.Title>
      </S.Header>

      <S.Form>
        <S.Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Email" />
          <S.TransactionButtonContainer>
            <TransactionButton title="Icome" type="up" />
            <TransactionButton title="Outcome" type="down" />
          </S.TransactionButtonContainer>
        </S.Fields>
        <Button title="Enviar" />
      </S.Form>
    </S.Container>
  );
};

export default Register;
