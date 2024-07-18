import React from 'react';
import FlipCard from './FlipCard';
import '../css/FlipCard.css'

const cardData = [
  { id: 1, front: 'Front 1', back: 'Back 1' },
  { id: 2, front: 'Front 2', back: 'Back 2' },
  { id: 3, front: 'Front 3', back: 'Back 3' },
  { id: 4, front: 'Front 4', back: 'Back 4' },
  { id: 5, front: 'Front 5', back: 'Back 5' },
  { id: 6, front: 'Front 6', back: 'Back 6' },
  // Adicione mais cards conforme necessário
];

const CardList = () => {
  return (
    <div className="card-list">
      {cardData.map(card => (
        <FlipCard
          key={card.id}
          frontContent={card.front}
          backContent={card.back}
        />
      ))}
    </div>
  );
};

export default CardList;
