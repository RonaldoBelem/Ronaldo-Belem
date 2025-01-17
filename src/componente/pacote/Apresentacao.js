import React, { useState } from "react";
import Imagem from "../img/ronaldo_nunes_belem.1a6f0c8a18677048dc35-removebg-preview.png";
import TypingEffect from "./TypingEffect";
import CardList from "./CardList";
import InfoContato from "../../modal/InfoContato";
import "../css/Apresentacao.css";
import curriculo from "../../curriculo/curriculo.pdf"
import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";

export default function Apresentacao() {
  const [visivel, setVisivel] = useState(false);
  const estiloH1={
    fontSize:"23px",
    fontWeight:"600",
  }
  const estiloNome={
    fontSize:"23px",
    color: "white",
    fontWeight:"600",
  }

  const body=document.querySelector('body')
  body.addEventListener("mousedown",()=>{
     setVisivel(false)
  })


  return (
    <>
      <section className="apresentacao__conteudo">
        <div className="apresentacao">
          <h1 >
             <div style={estiloH1}>
              Olá, me Chamo
            </div> 
            <div style={estiloNome}> Ronaldo Nunes Belem</div>
              <TypingEffect  />
          </h1>
          <p>
            Sou Apaixonado por tecnologia e desenvolvimento de software, possuo
            sólidos conhecimentos em diversas linguagens e tecnologias de
            back-end.
          </p>

          <section className="apresentacao__redeSocial">
            <a
              target="blank"
              href="https://api.whatsapp.com/send?phone=5591988633253"
            >
              <i class="bi bi-whatsapp"></i>
            </a>

            <a
              target="blank"
              href="https://www.linkedin.com/in/ronaldo-nunes-belem/"
            >
              <i class="bi bi-linkedin"></i>
            </a>

            <a target="blank" href="https://github.com/RonaldoBelem">
              <i class="bi bi-github"></i>
            </a>
            <a
              onClick={() => {
                setVisivel(!visivel);
              }}

              href={toBeEmpty}
            >
              <i class="bi bi-telephone"></i>
            </a>
            {visivel && <InfoContato fechar={() => setVisivel(false)} />}
          </section>
          <div className="baixar__curriculo">
            <a  download href={curriculo} >Baixar Curriculo</a>
          </div>
        </div>
        <img className="imagemPerfil" src={Imagem} alt="" />
      </section>
      <section>
        <CardList />
      </section>
    </>
  );
}
