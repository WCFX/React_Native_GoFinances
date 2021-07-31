import React, { useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

import * as S from './styles';

import plantAnimation from '../../assets/animations/plant.json';

const Preload: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');

      if (token) {
        // Token
      } else {
        navigation.navigate('Home');
      }
    };
    setTimeout(() => {
      checkToken();
    }, 2000);
  }, [navigation]);

  return (
    <S.Container>
      <LottieView
        autoSize
        resizeMode="contain"
        source={plantAnimation}
        loop
        autoPlay
      />
      <S.Title>
        <S.TitleColor>Plant</S.TitleColor>Manager
      </S.Title>
    </S.Container>
  );
};

export default Preload;
