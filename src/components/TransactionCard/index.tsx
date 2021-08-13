import React from 'react';

import * as S from './styles';

interface Category {
  name: string;
  icon: string;
}

export interface DataProps {
  type: 'positive' | 'negative';
  name: string;
  amount: string;
  category: Category;
  date: string;
}

interface TransactionCardProps {
  data: DataProps;
}

const TransactionCard = ({ data }: TransactionCardProps) => (
  <S.Container>
    <S.Title>{data.name}</S.Title>
    <S.Amount type={data.type}>
      {data.type === 'negative' && '-'}
      {data.amount}
    </S.Amount>

    <S.Footer>
      <S.Category>
        <S.Icon name={data.category.icon} />
        <S.CategoryName>{data.category.name}</S.CategoryName>
      </S.Category>
      <S.Date>{data.date}</S.Date>
    </S.Footer>
  </S.Container>
);

export default TransactionCard;
