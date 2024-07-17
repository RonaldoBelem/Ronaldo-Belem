// SliderCard.js
import React from 'react';
import Slider from 'react-slick';


const SliderCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const cards = [
    { id: 1, content: 'Card 1' },
    { id: 2, content: 'Card 2' },
    { id: 3, content: 'Card 3' },
    { id: 4, content: 'Card 4' },
    { id: 5, content: 'Card 5' },
  ];

  return (
    <div>
      <h2>Slider Card Example</h2>
      <Slider {...settings}>
        {cards.map(card => (
          <div key={card.id} style={{ padding: '10px' }}>
            <div style={{
              border: '2px solid #ddd',
              margin:'2px',
              borderRadius: '10px',
              padding: '20px',
              backgroundColor: '#83B4FF',
              textAlign: 'center'
            }}>
              {card.content}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderCard;
