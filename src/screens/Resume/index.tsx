import React from 'react';

import * as S from './styles';

import HistoryCard from '../../components/HistoryCard';

const Resume = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Resumo por categoria</S.Title>
      </S.Header>

      <HistoryCard title="Compras" color="red" amount="R$150,50" />
    </S.Container>
  );
};

export default Resume;
