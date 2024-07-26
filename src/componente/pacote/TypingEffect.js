import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const TypingEffect = () => {
  const [text] = useTypewriter({
    words: ['Sou Dev Back-End ',' Java, Kotlin, Csharp',' Phyton, JavaScript.','MySql, NoSql'],
    loop: 0, // Define 0 para repetir infinitamente
    typeSpeed: 90,
    deleteSpeed: 20,
    delaySpeed: 1600,
  });
  const maqEscrever={
    fontSize:"27px",
    fontWeight:"600",
  }

  return (
    <div>
      <h1 style={maqEscrever}>
        {text}
        <Cursor />
      </h1>
    </div>
  );
};

export default TypingEffect;
