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
  const [category, setCategory] = useState({
    key: 'category',
    name: 'categoria',
  });

  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  function handleTransactionTypeSelected(type: 'up' | 'down') {
    setTransactionType(type);
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false);
  }

  function handleRegister() {
    const data = {
      name,
      amount,
      transactionType,
      category: category.key,
    };
    console.log(data);
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>Cadastro</S.Title>
      </S.Header>

      <S.Form>
        <S.Fields>
          <Input
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder="Nome"
          />
          <Input
            value={amount}
            onChangeText={(text) => setAmount(text)}
            placeholder="Preço"
            keyboardType="numeric"
          />
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

          <CategorySelectButton
            onPress={handleOpenSelectCategoryModal}
            title={category.name}
          />
        </S.Fields>
        <Button onPress={handleRegister} title="Enviar" />
      </S.Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>
    </S.Container>
  );
};

export default Register;
