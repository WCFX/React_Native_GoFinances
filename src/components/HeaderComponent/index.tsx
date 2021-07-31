import React, { useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import * as S from './styles';

import avatarPic from '../../assets/images/avatar.jpg';

const HeaderComponent: React.FC = () => {
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem('@plantmanager:user');
      setUserName(user || '');
    }
    loadStorageUserName();
  }, []);

  return (
    <S.Container>
      <S.ContainerInfo>
        <S.Title>Olá, </S.Title>
        <S.Name>{userName}</S.Name>
      </S.ContainerInfo>
      <S.ContainerPic>
        <S.ProfileAvatar source={avatarPic} />
      </S.ContainerPic>
    </S.Container>
  );
};

export default HeaderComponent;
