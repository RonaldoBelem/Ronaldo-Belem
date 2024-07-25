import React, { useState } from "react";
import "../App.css";

const informacoes = {
  nome: "Ronaldo Nunes Belém",
  telefone: "Contato: (91)98739-0552",
  email: "ronaldonunes8@gmail.com"
};

const estiloInfo = {
  display: 'flex',
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1.1rem",
  fontWeight: 500,
  color: "#1a2130",
  width: "280px",
  height: "150px",
  background: "#fdffe2",
  float: "left",
  borderRadius: "10px",
  position: "absolute",
};

const estiloP = {
  margin: "1px auto",
  textIndent: "0",
};

const estiloBtn = {
  background: "#1a2130",
  color: "#fdffe2",
  padding: "4px",
  marginTop: "5px",
  borderRadius: "10px",
  border: "1px solid #83b4ff",
  width: "50%",
};

export default function InfoContato() {
  const [visivel, setVisivel] = useState(true);

  if (visivel) {
    return (
      <div style={estiloInfo}>
        <p style={estiloP}>{informacoes.nome}</p>
        <p style={estiloP}>{informacoes.telefone}</p>
        <p style={estiloP}>{informacoes.email}</p>
        <button style={estiloBtn} onClick={() => setVisivel(false)}>
          Fechar
        </button>
      </div>
    );
  }

  return null;
}
