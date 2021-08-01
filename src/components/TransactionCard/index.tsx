import React from 'react';

import * as S from './styles';

interface Category {
  name: string;
  icon: string;
}

interface TransactionCardProps {
  title: string;
  amount: string;
  category: Category;
  date: string;
}

const TransactionCard = ({
  title,
  amount,
  category,
  date,
}: TransactionCardProps) => (
  <S.Container>
    <S.Title>{title}</S.Title>
    <S.Amount>{amount}</S.Amount>

    <S.Footer>
      <S.Category>
        <S.Icon name="dollar-sign" />
        <S.CategoryName>{category}</S.CategoryName>
      </S.Category>
      <S.Date>{date}</S.Date>
    </S.Footer>
  </S.Container>
);

export default TransactionCard;
