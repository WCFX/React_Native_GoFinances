import React, { useState } from 'react';
import { Platform } from 'react-native';

import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { useRoute } from '@react-navigation/native';
import { format, isBefore } from 'date-fns';
import { showMessage } from 'react-native-flash-message';
import { SvgUri } from 'react-native-svg';

import * as S from './styles';

import waterDrop from '../../assets/images/waterdrop.png';
import { PlantProps, savePlant } from '../../libs/storage';

interface Params {
  plant: PlantProps;
}

const PlantDetail: React.FC = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');
  const route = useRoute();

  const { plant } = route.params as Params;

  function handleDateTimePickerForAndroid() {
    setShowDatePicker((oldState) => !oldState);
  }

  function handleChangeTime(event: Event, dateTime: Date | undefined) {
    if (Platform.OS === 'android') {
      setShowDatePicker((oldState) => !oldState);
    }
    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date());
      showMessage({
        message: 'Escolha um horário no futuro ⏰',
        duration: 4000,
        type: 'warning',
      });
    }
    if (dateTime) {
      setSelectedDateTime(dateTime);
    }
  }

  async function handleSavePlant() {
    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime,
      });
    } catch {
      showMessage({
        message: 'Não foi possível salvar',
        duration: 3000,
        type: 'warning',
      });
    }
  }

  return (
    <S.Container>
      <S.PlantInfo>
        <SvgUri uri={plant.photo} width={156} height={176} />

        <S.Title>{plant.name}</S.Title>
        <S.Description>{plant.about}</S.Description>

        <S.ContainerCareMethod>
          <S.Img source={waterDrop} />
          <S.CareMethod>{plant.water_tips}</S.CareMethod>
        </S.ContainerCareMethod>
      </S.PlantInfo>
      <S.SectionTwo>
        {showDatePicker && (
          <DateTimePicker
            value={selectedDateTime}
            mode="time"
            display="spinner"
            onChange={handleChangeTime}
          />
        )}

        {Platform.OS === 'android' && (
          <S.DateTimePickerButton onPress={handleDateTimePickerForAndroid}>
            <S.DateTimePickerButtonText>
              {`Mudar Horário ${format(selectedDateTime, 'HH:mm')}`}
            </S.DateTimePickerButtonText>
          </S.DateTimePickerButton>
        )}
        <S.RegisterPlant onPress={handleSavePlant}>
          <S.RegisterPlantText>Cadastrar Planta</S.RegisterPlantText>
        </S.RegisterPlant>
      </S.SectionTwo>
    </S.Container>
  );
};

export default PlantDetail;
