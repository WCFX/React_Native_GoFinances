import React from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';

import * as S from './styles';

import { ButtonSubmit } from '../../components';

interface Params {
  title: string;
  subtitle: string;
  bottonTitle: string;
  icon: 'celebration' | 'hug';
  nextScreen: string;
}

const emoji = {
  hug: '🤗',
  celebration: '👏😆',
};

const Resume: React.FC = () => {
  const { navigate } = useNavigation();
  const routes = useRoute();

  const { title, subtitle, bottonTitle, icon, nextScreen } =
    routes.params as Params;

  function handleNavigateToTheNextPage() {
    navigate(nextScreen);
  }

  return (
    <S.Container>
      <S.ContainerContent>
        <S.Emoticon>{emoji[icon]}</S.Emoticon>
        <S.Title>{title}</S.Title>
        <S.Description>{subtitle}</S.Description>
        <ButtonSubmit onPress={handleNavigateToTheNextPage} title="Confirmar" />
      </S.ContainerContent>
    </S.Container>
  );
};

export default Resume;
