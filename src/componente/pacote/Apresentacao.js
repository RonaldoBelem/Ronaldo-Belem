import React from "react";
import Imagem from "../img/ronaldo_nunes_belem.1a6f0c8a18677048dc35-removebg-preview.png";
import TypingEffect from "./TypingEffect";
import Carrosel from "./Carrosel";
import "../css/Apresentacao.css";

export default function Apresentacao() {
  return (
    <>
      <section className="apresentacao__conteudo">
        <div className="apresentacao">
          <h1>
            Desenvolvedor
            <strong>
              <TypingEffect />
            </strong>
          </h1>
          <p>
            Sim, o Rei Xerxes da história de Ester na Bíblia é o mesmo Rei
            Xerxes retratado no filme "300". Ambos se referem a Xerxes I, também
            conhecido como Xerxes, o Grande, que foi um rei do Império
            Aquemênida (Persa). Aqui estão alguns detalhes sobre Xerxes I: 1.
            **História Bíblica**: No livro de Ester, Xerxes I é referido como
          </p>
          <section className="apresentacao__redeSocial">
            <a
              target="blank"
              href="https://api.whatsapp.com/send?phone=5591988633253"
            >
              <i class="bi bi-whatsapp"></i>
              <span>Whatsapp</span>
            </a>

            <a
              target="blank"
              href="https://www.linkedin.com/in/ronaldo-nunes-belem/"
            >
              <i class="bi bi-linkedin"></i>
              <span>Linkedin</span>
            </a>

            <a target="blank" href="https://github.com/RonaldoBelem">
              <i class="bi bi-github"></i>
              <span>Github</span>
            </a>
          </section>
        </div>
        <img className="imagemPerfil" src={Imagem} alt="" />
      </section>
      <section >
        <Carrosel />
      </section>
    </>
  );
}
