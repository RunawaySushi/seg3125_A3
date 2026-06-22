import React from 'react';
import Card from './Card';
import './Board.css';

export default function Board({ cards, flipped, matched, wrong, onFlip, cols, fontSize }) {
  return (
    <div
      className="board"
      style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
    >
      {cards.map((card, i) => (
        <Card
          key={card.id}
          card={card}
          isFlipped={flipped.includes(i)}
          isMatched={matched.has(card.pairKey)}
          isWrong={wrong.includes(i)}
          onClick={() => onFlip(i)}
          fontSize={fontSize}
        />
      ))}
    </div>
  );
}