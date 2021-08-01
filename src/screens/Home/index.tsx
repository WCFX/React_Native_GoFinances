import React from 'react';

import * as S from './styles';

import { HighlightCard, TransactionCard } from '../../components';
import { DataProps as TransactionCardProps } from '../../components/TransactionCard';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

const Home = () => {
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: 'Venda de App financeiro',
      amount: 'R$5.700,00',
      category: {
        name: 'Salário',
        icon: 'dollar-sign',
      },
      date: '31/08/2021',
    },
    {
      id: '2',
      type: 'negative',
      title: 'Bicicleta Spinning',
      amount: 'R$1.999,00',
      category: {
        name: 'Compras',
        icon: 'shopping-bag',
      },
      date: '31/08/2021',
    },
    {
      id: '3',
      type: 'negative',
      title: 'Credicard',
      amount: 'R$4.500,00',
      category: {
        name: 'Cartão de Crédito',
        icon: 'credit-card',
      },
      date: '02/08/2021',
    },
    {
      id: '4',
      type: 'positive',
      title: 'Salário',
      amount: 'R$13.700,00',
      category: {
        name: 'Emprego',
        icon: 'dollar-sign',
      },
      date: '10/08/2021',
    },
    {
      id: '5',
      type: 'negative',
      title: 'Mx Master 3',
      amount: 'R$580,00',
      category: {
        name: 'Compras',
        icon: 'shopping-bag',
      },
      date: '10/08/2021',
    },
    {
      id: '6',
      type: 'negative',
      title: 'Cadeira Gamer',
      amount: 'R$1.600,00',
      category: {
        name: 'Compras',
        icon: 'shopping-bag',
      },
      date: '10/08/2021',
    },
    {
      id: '7',
      type: 'negative',
      title: 'Monitor 29 inch',
      amount: 'R$1.700,00',
      category: {
        name: 'Compras',
        icon: 'shopping-bag',
      },
      date: '10/08/2021',
    },
  ];

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
