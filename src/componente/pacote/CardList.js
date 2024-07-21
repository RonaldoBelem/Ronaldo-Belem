import React from 'react';
import FlipCard from './FlipCard';
import '../css/FlipCard.css'

const cardData = [
  { id: 1, front: 'Front 1', back: 'Back 1', frontImage: 'url_to_front_image_1', backImage: 'url_to_back_image_1' },
  { id: 2, front: 'Front 2', back: 'Back 2', frontImage: 'url_to_front_image_2', backImage: 'url_to_back_image_2' },
  { id: 3, front: 'Front 3', back: 'Back 3', frontImage: 'url_to_front_image_3', backImage: 'url_to_back_image_3' },
  { id: 4, front: 'Front 4', back: 'Back 4', frontImage: 'url_to_front_image_4', backImage: 'url_to_back_image_4' },
  { id: 5, front: 'Front 5', back: 'Back 5', frontImage: 'url_to_front_image_5', backImage: 'url_to_back_image_5' },
  { id: 6, front: 'Front 6', back: 'Back 6', frontImage: 'url_to_front_image_6', backImage: 'url_to_back_image_6' },
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
          frontImage={card.frontImage}
          backImage={card.backImage}
        />
      ))}
    </div>
  );
};

export default CardList;
