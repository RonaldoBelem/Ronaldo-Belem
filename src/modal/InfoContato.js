import React from "react";
import "../App.css";

const infomacoes = {
  nome: "Ronaldo Nunes Belém",
  telefone: "Contato: (91)98739-0552",
  email: "ronaldonunes8@gmail.com"
};
const InfoStylus = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1.1rem",
  fontWeight: 500,
  color: "#1a2130",
  width: "280px",
  height: "110px",
  background: "#fdffe2",
  float: "left",
  borderRadius: "10px",
  position: "absolute",
};
const infoP = {
  margin: "1px auto",
  textIndent: "0",
};
export default function InfoContato(isOpen) {
  if (isOpen) {
    return (
      <div style={InfoStylus}>
        <p style={infoP}>{infomacoes.nome}</p>
        <p style={infoP}>{infomacoes.telefone}</p>
        <p style={infoP}>{infomacoes.email}</p>
      </div>
    );
  }
  return null;
}
