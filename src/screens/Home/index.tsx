import React, { useState, useEffect, useCallback } from 'react';
import { ActivityIndicator } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import * as S from './styles';

import { HighlightCard, TransactionCard } from '../../components';
import { DataProps as TransactionCardProps } from '../../components/TransactionCard';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

interface HighlightProps {
  amount: string;
}

interface HighlightData {
  entries: HighlightProps;
  expensives: HighlightProps;
  total: HighlightProps;
}

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState<DataListProps[]>([]);
  const [highlightData, setHighlightData] = useState<HighlightData>(
    {} as HighlightData,
  );

  async function loadTransactions() {
    const dataKey = '@gofinances:transactions';
    const response = await AsyncStorage.getItem(dataKey);
    const transactions = response ? JSON.parse(response) : [];

    let entriesTotal = 0;
    let expensiveTotal = 0;

    const transactionsFormatted: DataListProps[] = transactions.map(
      (item: DataListProps) => {
        if (item.type === 'positive') {
          entriesTotal += Number(item.amount);
        } else {
          expensiveTotal += Number(item.amount);
        }

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
    setTransactions(transactionsFormatted);

    const total = entriesTotal - expensiveTotal;

    setHighlightData({
      entries: {
        amount: entriesTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
      },
      expensives: {
        amount: expensiveTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
      },
      total: {
        amount: total.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
      },
    });
    setIsLoading(false);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, []),
  );

  const theme = useTheme();

  return (
    <S.Container>
      {isLoading ? (
        <S.LoadingContainer>
          <ActivityIndicator size="large" color={theme.colors.primary} />
        </S.LoadingContainer>
      ) : (
        <>
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
              amount={highlightData.entries.amount}
              // amount="R$14.000"
              lastTransaction="Ultima entrada dia 13 de abril"
            />
            <HighlightCard
              type="down"
              title="Saídas"
              amount={highlightData.expensives.amount}
              // amount="R$1300.00"
              lastTransaction="Ultima entrada dia 08 de abril"
            />
            <HighlightCard
              type="total"
              title="Total"
              amount={highlightData.total.amount}
              // amount="R$1300.00"
              lastTransaction="01 à 16 de Abril"
            />
          </S.HightLightCardContainer>

          <S.Transactions>
            <S.Title>Listagem</S.Title>

            <S.TransactionList
              data={transactions}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <TransactionCard data={item} />}
            />
          </S.Transactions>
        </>
      )}
    </S.Container>
  );
};

export default Home;
