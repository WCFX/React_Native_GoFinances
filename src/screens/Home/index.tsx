import React from 'react';

import * as S from './styles';

import HighlightCard from '../../components/HighlightCard';

const Home = () => (
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
  </S.Container>
);

export default Home;
