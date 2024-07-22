import React, { useState, useEffect } from "react";

const IdadeDinamica = () => {
    const data = new Date();
    const anoAtual = data.getFullYear()-1982
  const [idade, setIdade] = useState(anoAtual);

  useEffect(() => {
    const data = new Date();
    const mes = data.getMonth()+1; 

    if (mes === 3) {
      
      setIdade((prevIdade) => prevIdade + 1);
    }
  }, []); 

  return <span>{idade}</span>;
};

export default IdadeDinamica;
