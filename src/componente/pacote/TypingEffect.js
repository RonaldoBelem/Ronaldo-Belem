import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const TypingEffect = () => {
  const [text] = useTypewriter({
    words: ['Sou Desenvolvedor', 'Back-End Java, Kotlin', 'Csharp, Phyton','JavaScript ...'],
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
