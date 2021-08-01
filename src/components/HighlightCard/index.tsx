import React from 'react';

import * as S from './styles';

const HighlightCard: React.FC = () => (
  <S.Container>
    <S.Header>
      <S.Title>Entradas</S.Title>
      <S.Icon name="arrow-up-circle" />
    </S.Header>

    <S.Footer>
      <S.Amount>R$17.400,00</S.Amount>
      <S.LastTransaction>Ultima entrada dia 13 de Abril</S.LastTransaction>
    </S.Footer>
  </S.Container>
);

export default HighlightCard;
