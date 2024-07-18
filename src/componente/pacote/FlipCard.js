import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const FlipCard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div onClick={handleClick} className="card">
        {frontContent}
      </div>
      <div onClick={handleClick} className="card">
        {backContent}
      </div>
    </ReactCardFlip>
  );
};

export default FlipCard;
