import React, { useState } from 'react';
import { Modal } from 'react-native';

import * as S from './styles';

import {
  Button,
  CategorySelectButton,
  Input,
  TransactionButton,
} from '../../components';
import CategorySelect from '../CategorySelect';

const Register = () => {
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  function handleTransactionTypeSelected(type: 'up' | 'down') {
    setTransactionType(type);
  }

  function handleCloseSelectCategory() {
    setCategoryModalOpen(false);
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

          <CategorySelectButton title="Categoria" />
        </S.Fields>
        <Button title="Enviar" />
      </S.Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category=""
          setCategory={}
          closeSelectCategory={handleCloseSelectCategory}
        />
      </Modal>
    </S.Container>
  );
};

export default Register;
