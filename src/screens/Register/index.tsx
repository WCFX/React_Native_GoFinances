import React, { useState } from 'react';

import * as S from './styles';

import {
  Button,
  CategorySelect,
  Input,
  TransactionButton,
} from '../../components';

const Register = () => {
  const [transactionType, setTransactionType] = useState('');

  function handleTransactionTypeSelected(type: 'up' | 'down') {
    setTransactionType(type);
  }

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
            <TransactionButton
              isActive={transactionType === 'up'}
              onPress={() => handleTransactionTypeSelected('up')}
              title="Income"
              type="up"
            />
            <TransactionButton
              isActive={transactionType === 'down'}
              onPress={() => handleTransactionTypeSelected('down')}
              title="Outcome"
              type="down"
            />
          </S.TransactionButtonContainer>

          <CategorySelect title="Categoria" />
        </S.Fields>
        <Button title="Enviar" />
      </S.Form>
    </S.Container>
  );
};

export default Register;
