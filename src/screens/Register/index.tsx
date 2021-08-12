import React, { useEffect, useState } from 'react';
import { Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useForm } from 'react-hook-form';
import { showMessage } from 'react-native-flash-message';
import uuid from 'react-native-uuid';
import * as Yup from 'yup';

import * as S from './styles';

import {
  Button,
  CategorySelectButton,
  InputForm,
  TransactionButton,
} from '../../components';
import CategorySelect from '../CategorySelect';

interface FormData {
  name: string;
  amount: string;
}
const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  amount: Yup.number()
    .positive('O valor não pode ser negativo')
    .typeError('Informe um valor numérico')
    .required('O valor é obrigatório'),
});

const Register = () => {
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: 'category',
    name: 'categoria',
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleTransactionTypeSelected(type: 'up' | 'down') {
    setTransactionType(type);
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false);
  }

  async function handleRegister(form: FormData) {
    if (!transactionType) {
      showMessage({
        message: 'Faltou algo 🧐 ',
        icon: 'danger',
        description: 'Você esqueceu de selecionar o tipo da transação',
        type: 'danger',
      });
    }

    if (category.key === 'category') {
      showMessage({
        message: 'Faltou algo 🧐 ',
        icon: 'danger',
        description: 'Você esqueceu de escolher uma categoria',
        type: 'danger',
      });
    }

    const newTransaction = {
      id: String(uuid.v4()),
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
      date: new Date(),
    };
    try {
      const data = await AsyncStorage.getItem('@gofinances:transactions');
      const currentData = data ? JSON.parse(data) : [];

      const dataFormatted = [...currentData, newTransaction];

      await AsyncStorage.setItem(
        '@gofinances:transactions',
        JSON.stringify(dataFormatted),
      );
    } catch (error) {
      showMessage({
        message: 'Não foi possível salvar 😔',
        icon: 'danger',
        description: 'Aconteceu algum erro, tente novamente mais tarde.',
        type: 'danger',
      });
    }
  }

  useEffect(() => {
    async function loadData() {
      const response = await AsyncStorage.getItem('@gofinances:transactions');
      console.log(JSON.parse(response!));
    }
    loadData();

    // async function removeAll() {
    //   await AsyncStorage.removeItem('@gofinances:transactions');
    // }
    // removeAll();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <S.Header>
          <S.Title>Cadastro</S.Title>
        </S.Header>

        <S.Form>
          <S.Fields>
            <InputForm
              autoCapitalize="sentences"
              autoCorrect={false}
              name="name"
              control={control}
              placeholder="Nome"
              error={errors.name && errors.name.message}
            />
            <InputForm
              keyboardType="numeric"
              name="amount"
              control={control}
              placeholder="Valor"
              error={errors.amount && errors.amount.message}
            />
            <S.TransactionButtonContainer>
              <TransactionButton
                isActive={transactionType === 'up'}
                onPress={() => handleTransactionTypeSelected('up')}
                title="Entrou"
                type="up"
              />
              <TransactionButton
                isActive={transactionType === 'down'}
                onPress={() => handleTransactionTypeSelected('down')}
                title="Saiu"
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
    </TouchableWithoutFeedback>
  );
};

export default Register;
