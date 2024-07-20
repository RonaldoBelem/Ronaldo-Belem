import React, { useState } from "react";
import Imagem from "../img/ronaldo_nunes_belem.1a6f0c8a18677048dc35-removebg-preview.png";
import TypingEffect from "./TypingEffect";
import CardList from "./CardList";
import InfoContato from "../../modal/InfoContato";
import "../css/Apresentacao.css";
import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";

export default function Apresentacao() {
  const [Contato, setContato] = useState(false);
  const informacao_contatos = () => {
    if (Contato === true) {
      return <InfoContato />;
    }
  };

  return (
    <>
      <section className="apresentacao__conteudo">
        <div className="apresentacao">
          <h1>
            Olá, me chamo Ronaldo.
            <strong>
              <TypingEffect />
            </strong>
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
            <a
              onClick={() => {
                if (Contato === false) {
                  setContato(true);
                } else if (Contato === true) {
                  setContato(false);
                }
                console.log(Contato);
              }}
              href={toBeEmpty}
            >
              <i class="bi bi-telephone"></i>
              <span>Telefone</span>
            </a>

            {informacao_contatos()}
          </section>
        </div>
        <img className="imagemPerfil" src={Imagem} alt="" />
      </section>
      <section>
        <CardList />
      </section>
    </>
  );
}
