import React from 'react';

import { getBottomSpace } from 'react-native-iphone-x-helper';

import * as S from './styles';

import { HighlightCard, TransactionCard } from '../../components';

const Home = () => {
  const data = [
    {
      type: 'positive',
      title: 'Salário Midway',
      amount: 'R$5.700,00',
      category: {
        name: 'Salário',
        icon: 'dollar-sign',
      },
      date: '31/08/2021',
    },
    {
      type: 'negative',
      title: 'Credicard',
      amount: 'R$4.500,00',
      category: {
        name: 'Cartão de Crédito',
        icon: 'dollar-sign',
      },
      date: '02/08/2021',
    },
    {
      type: 'positive',
      title: 'Recisão JBQ',
      amount: 'R$13.700,00',
      category: {
        name: 'Emprego',
        icon: 'dollar-sign',
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
          renderItem={({ item }) => <TransactionCard data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: getBottomSpace(),
          }}
        />
      </S.Transactions>
    </S.Container>
  );
};

export default Home;
