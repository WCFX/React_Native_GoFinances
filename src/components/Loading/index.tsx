import React from 'react';

import LottieView from 'lottie-react-native';

import * as S from './styles';
import { styles } from './styles';

import LoadingAnimation from '../../assets/animations/load.json';

const Loading: React.FC = () => {
  return (
    <S.Container>
      <LottieView
        source={LoadingAnimation}
        loop
        autoPlay
        style={styles.animation}
      />
    </S.Container>
  );
};

export default Loading;
