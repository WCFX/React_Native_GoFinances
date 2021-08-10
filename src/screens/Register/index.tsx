import React, { useState } from 'react';
import { Modal } from 'react-native';

import { useForm } from 'react-hook-form';

import * as S from './styles';

import {
  Button,
  CategorySelectButton,
  Input,
  InputForm,
  TransactionButton,
} from '../../components';
import CategorySelect from '../CategorySelect';

interface FormData {
  name: string;
  amount: string;
}

const Register = () => {
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: 'category',
    name: 'categoria',
  });

  const { control, handleSubmit } = useForm();

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

  function handleRegister(form: FormData) {
    const data = {
      name: form.name,
      amount: form.amount,
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
          <InputForm name="name" control={control} placeholder="Name" />
          <InputForm
            keyboardType="numeric"
            name="amount"
            control={control}
            placeholder="Amount"
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
        <Button onPress={handleSubmit(handleRegister)} title="Enviar" />
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
