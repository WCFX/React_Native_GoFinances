import React from 'react';

import * as S from './styles';

import AvatarImg from '../../assets/images/avatar.jpeg';

const Home: React.FC = () => (
  <S.Container>
    <S.Header>
      <S.UserInfo>
        <S.Photo source={AvatarImg} />
        <S.User>
          <S.UserGreeting>Olá, </S.UserGreeting>
          <S.UserName>Wagner</S.UserName>
        </S.User>
      </S.UserInfo>
    </S.Header>
  </S.Container>
);

export default Home;
