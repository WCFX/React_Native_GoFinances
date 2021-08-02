import React from 'react';
import { FlatList } from 'react-native';

import * as S from './styles';

import { categories } from '../../utils/categories';

interface CategoryProps {
  key: string;
  name: string;
}

interface Props {
  category: string;
  setCategory: (category: CategoryProps) => void;
  closeSelectCategory: () => void;
}

const CategorySelect: React.FC = ({
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
      />
    </S.Container>
  );
};

export default CategorySelect;
