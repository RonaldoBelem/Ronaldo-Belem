import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const FlipCard = ({ frontContent, backContent, frontImage, backImage }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div onClick={handleClick} className="cardFront" style={{ backgroundImage: `url(${frontImage})` }}>
        {frontContent}
      </div>
      <div onClick={handleClick} className="cardBack" style={{ backgroundImage: `url(${backImage})` }}>
        {backContent}
      </div>
    </ReactCardFlip>
  );
};

export default FlipCard;
