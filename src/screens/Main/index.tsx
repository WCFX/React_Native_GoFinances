import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { xColors } from '../../styles';
import * as S from './styles';

import {
  HeaderComponent,
  HorizontalButton,
  Loading,
  PlantCardPrimary,
} from '../../components';
import { PlantProps } from '../../libs/storage';
import api from '../../server/api';

interface EnvironmentsProps {
  key: string;
  title: string;
  id: string;
}

export function Main() {
  const [environments, setEnvironments] = useState<EnvironmentsProps[]>();
  const [plants, setPlants] = useState<PlantProps[]>();
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>();
  const [environmentSelected, setEnvironmentSelected] = useState('all');
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  const { navigate } = useNavigation();

  function handleNavigateToTheNextPage(plant: PlantProps) {
    navigate('PlantDetail', { plant });
  }

  function handleEnvironmentSelected(environment: string) {
    setEnvironmentSelected(environment);

    if (environment === 'all') {
      return setFilteredPlants(plants);
    }
    const filtered = plants?.filter((plant) =>
      plant.environments.includes(environment),
    );
    return setFilteredPlants(filtered);
  }

  async function fetchPlants() {
    const { data } = await api.get(
      `plants?_sort=name&_order=asc&_page=${page}&_limit=8`,
    );

    if (!data) {
      return setLoading(true);
    }
    if (page > 1) {
      setPlants((oldValue) => [...oldValue, ...data]);
      setFilteredPlants((oldValue) => [...oldValue, ...data]);
    } else {
      setPlants(data);
      setFilteredPlants(data);
    }

    setLoading(false);
    setLoadingMore(false);

    return data;
  }

  function handleFetchMore(distance: number) {
    if (distance < 1) return;
    setLoadingMore(true);
    setPage((oldValue) => oldValue + 1);
    fetchPlants();
  }

  useEffect(() => {
    async function fetchEnvironment() {
      const { data } = await api.get(
        'plants_environments?_sort=title&_order=asc',
      );
      setEnvironments([
        {
          key: 'all',
          title: 'Todos',
        },
        ...data,
      ]);
    }

    fetchEnvironment();
  }, []);

  useEffect(() => {
    fetchPlants();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <S.Container>
      <S.ContainerHeader>
        <HeaderComponent />
        <S.ContainerInfo>
          <S.Title>Em qual hambiente</S.Title>
          <S.Description>você quer colocar a sua planta</S.Description>
        </S.ContainerInfo>
        <FlatList
          data={environments}
          keyExtractor={(item) => item.key.toString()}
          renderItem={({ item }) => (
            <View key={item.id}>
              <HorizontalButton
                active={item.key === environmentSelected}
                onPress={() => handleEnvironmentSelected(item.key)}
                title={item.title}
              />
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </S.ContainerHeader>
      <S.ContainerPlants>
        <FlatList
          data={filteredPlants}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PlantCardPrimary
              onPress={() => handleNavigateToTheNextPage(item)}
              data={item}
            />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) =>
            handleFetchMore(distanceFromEnd)
          }
          ListFooterComponent={
            loadingMore ? (
              <ActivityIndicator size={38} color={`${xColors.green}`} />
            ) : (
              <></>
            )
          }
        />
      </S.ContainerPlants>
    </S.Container>
  );
}

export default Main;
