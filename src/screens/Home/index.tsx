import React from 'react';

import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import * as S from './styles';

import Banner from '../../assets/images/watering.png';

const Home: React.FC = () => {
  const { navigate } = useNavigation();

  function handleNavigateToTheNextPage() {
    navigate('Quiz');
  }

  return (
    <S.Container>
      <S.ContainerSection>
        <S.Title>Gerencie{'\n'}suas plantas de forma fácil</S.Title>
      </S.ContainerSection>
      <S.Banner source={Banner} resizeMode="contain" />

      <S.ContainerSection>
        <S.Description>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </S.Description>
      </S.ContainerSection>

      <S.ButtonSubmit onPress={handleNavigateToTheNextPage}>
        <S.ButtonSubmitText>
          <AntDesign name="right" size={24} color="#FFF" />
        </S.ButtonSubmitText>
      </S.ButtonSubmit>
    </S.Container>
  );
};

export default Home;
