import React, { useState } from 'react';
import { Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';

import { xColors } from '../../styles';
import * as S from './styles';

import { ButtonSubmit } from '../../components';

const Quiz: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  const { navigate } = useNavigation();

  async function handleNavigateToTheNextPage() {
    if (!name) {
      showMessage({
        message: 'Você precisa colocar o seu nome',
        duration: 3000,
        description:
          'Não seja timido(a), queremos conhecer você. Coloque seu nome!',
        type: 'danger',
      });
    } else {
      try {
        await AsyncStorage.setItem('@plantmanager:user', name);
        navigate('Resume', {
          title: 'Protinho !!',
          subtitle:
            'Agora vamos começar a cuidar das suas plantinhas com muito cuidado',
          icon: 'celebration',
          nextScreen: 'PlantDetail',
        });
      } catch {
        showMessage({
          message: 'Não foi possível salvar o nome do usuário',
          duration: 3000,
          type: 'warning',
        });
      }
    }
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <S.Form behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <S.Emoticon>{isFilled ? '🤩' : '🧐'}</S.Emoticon>
          <S.Title>Como podemos chamar você?</S.Title>
          <S.Input
            style={
              (isFocused || isFilled) && { borderBottomColor: xColors.green }
            }
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            placeholder="Digite seu nome"
            onChangeText={handleInputChange}
            autoCapitalize="words"
          />
          <ButtonSubmit
            onPress={handleNavigateToTheNextPage}
            title="Continue"
          />
        </S.Form>
      </S.Container>
    </TouchableWithoutFeedback>
  );
};

export default Quiz;
