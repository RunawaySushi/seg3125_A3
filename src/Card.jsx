import React from 'react';
import './Card.css';

export default function Card({ card, isFlipped, isMatched, isWrong, onClick, fontSize }) {
  const classes = [
    'card',
    isFlipped ? 'flipped' : '',
    isMatched ? 'matched' : '',
    isWrong   ? 'wrong'   : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} style={{ fontSize }} onClick={onClick}>
      {(isFlipped || isMatched || isWrong) ? card.n : ''}
    </div>
  );
}