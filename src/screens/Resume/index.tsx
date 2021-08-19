import React, { useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import * as S from './styles';

import HistoryCard from '../../components/HistoryCard';
import { categories } from '../../utils/categories';

interface TransactionData {
  type: 'positive' | 'negative';
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface CategoryData {
  key: string;
  name: string;
  total: string;
  color: string;
  percent: number;
  percentFormatted: string;
}

const Resume = () => {
  const [totalByCategories, setTotalByCategories] = useState<CategoryData[]>(
    [],
  );

  async function loadData() {
    const dataKey = '@gofinances:transactions';
    const response = await AsyncStorage.getItem(dataKey);
    const responseFormatted = response ? JSON.parse(response) : [];

    const expensives = responseFormatted.filter(
      (expensive: TransactionData) => expensive.type === 'negative',
    );

    const expensivesTotal = expensives
      .reduce((acc: number, expensive: TransactionData) => {
        return acc + Number(expensive.amount);
      }, 0)
      .toFixed(2);

    console.log(expensivesTotal);

    const totalByCategory: CategoryData[] = [];

    categories.forEach((category) => {
      let categorySum = 0;

      expensives.forEach((expensive: TransactionData) => {
        if (expensive.category === category.key) {
          categorySum += Number(expensive.amount);
        }
      });
      if (categorySum > 0) {
        const total = categorySum.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });

        const percent = (categorySum / expensivesTotal) * 100;
        const percentFormatted = `${percent.toFixed(0)}%`;

        totalByCategory.push({
          key: category.key,
          name: category.name,
          total,
          color: category.color,
          percent,
          percentFormatted,
        });
      }
    });
    console.log(totalByCategory);
    setTotalByCategories(totalByCategory);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <S.Container>
      <S.Header>
        <S.Title>Resumo por categoria</S.Title>
      </S.Header>

      <S.Content>
        {totalByCategories.map((item) => (
          <HistoryCard
            key={item.key}
            title={item.name}
            color={item.color}
            amount={item.total}
          />
        ))}
      </S.Content>
    </S.Container>
  );
};
export default Resume;
