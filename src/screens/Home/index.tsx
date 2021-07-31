import React from 'react';

import * as S from './styles';

const Home: React.FC = () => (
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
  </S.Container>
);

export default Home;
