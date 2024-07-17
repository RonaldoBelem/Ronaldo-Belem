import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const TypingEffect = () => {
  const [text] = useTypewriter({
    words: ['Hello world!', 'Welcome to my site!', 'Enjoy your stay!'],
    loop: 0, // Define 0 para repetir infinitamente
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <div>
      <h1>
        {text}
        <Cursor />
      </h1>
    </div>
  );
};

export default TypingEffect;
