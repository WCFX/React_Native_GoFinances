import React, { useState, useEffect, useCallback } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import * as S from './styles';

import { HighlightCard, TransactionCard } from '../../components';
import { DataProps as TransactionCardProps } from '../../components/TransactionCard';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

const Home = () => {
  const [data, setData] = useState<DataListProps[]>([]);

  async function loadTransaction() {
    const dataKey = '@gofinances:transactions';
    const response = await AsyncStorage.getItem(dataKey);
    const transactions = response ? JSON.parse(response) : [];

    const transactionsFormatted: DataListProps[] = transactions.map(
      (item: DataListProps) => {
        const amount = Number(item.amount).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });

        const date = Intl.DateTimeFormat('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit',
        }).format(new Date(item.date));

        return {
          id: item.id,
          name: item.name,
          amount,
          type: item.type,
          category: item.category,
          date,
        };
      },
    );
    setData(transactionsFormatted);
  }

  useEffect(() => {
    loadTransaction();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadTransaction();
    }, []),
  );

  return (
    <S.Container>
      <S.Header>
        <S.UserWrapper>
          <S.UserInfo>
            <S.Photo
              source={{
                uri: 'https://avatars.githubusercontent.com/u/66399640?v=4',
              }}
            />
            <S.User>
              <S.UserGreeting>Olá, </S.UserGreeting>
              <S.UserName>Wagner</S.UserName>
            </S.User>
          </S.UserInfo>
          <S.LogoutButton>
            <S.LogoutButtonText>
              <S.Icon name="poweroff" />
            </S.LogoutButtonText>
          </S.LogoutButton>
        </S.UserWrapper>
      </S.Header>

      <S.HightLightCardContainer
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$17.000,00"
          lastTransaction="Ultima entrada dia 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$7.000,00"
          lastTransaction="Ultima entrada dia 08 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$10.000,00"
          lastTransaction="01 à 16 de Abril"
        />
      </S.HightLightCardContainer>

      <S.Transactions>
        <S.Title>Listagem</S.Title>

        <S.TransactionList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </S.Transactions>
    </S.Container>
  );
};

export default Home;
