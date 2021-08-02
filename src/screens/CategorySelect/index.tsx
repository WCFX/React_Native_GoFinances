import React from 'react';
import { FlatList } from 'react-native';

import * as S from './styles';

import { Button } from '../../components';
import { categories } from '../../utils/categories';

interface CategoryProps {
  key: string;
  name: string;
}

export interface Props {
  category: CategoryProps;
  setCategory: (category: CategoryProps) => void;
  closeSelectCategory: () => void;
}

const CategorySelect = ({
  category,
  setCategory,
  closeSelectCategory,
}: Props) => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Categoria</S.Title>
      </S.Header>

      <FlatList
        data={categories}
        style={{ flex: 1, width: '100%' }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <S.Category>
            <S.Icon name={item.icon} />
            <S.Name>{item.name}</S.Name>
          </S.Category>
        )}
        ItemSeparatorComponent={() => <S.Separator />}
      />

      <S.Footer>
        <Button onPress={closeSelectCategory} title="Selecionar" />
      </S.Footer>
    </S.Container>
  );
};

export default CategorySelect;
