import React from "react";
import IdadeDinamica from "./pacote/IdadeDinamica";
import Imagem from "./img/ronaldo nunes belem.jpeg";
import "../componente/css/Sobre.css";

export default function Sobre() {

  return (
    <>
      <section className="apresentacao__conteudo__Sobre">
        <h1>Sobre</h1>
        <div className="apresentacao__Sobre">
          <img className="imagemSobre" src={Imagem} alt="" />
          <p>
            Comecei a Trabalhar aos 13 Anos de Maneira Informal e aos 19 Anos
            Consegui meu Primeiro Emprego de Carteira assinada, sempre estudando
            e tentando evoluir como profissional hoje tenho {IdadeDinamica()}{' '}
            anos e continuo estudando alias estou realizando meu sonho de ser um
            programador pretendo evoluir mais e mais nesta área para ser um
            profissional de excelência.
          </p>
          <p>
            Sou Apaixonado por tecnologia e desenvolvimento de software, possuo
            sólidos conhecimentos em diversas linguagens e tecnologias de
            back-end. Competente em Node.js, Python, Java, C#, e Kotlin, com
            habilidades em bancos de dados MySQL e NoSQL. Busco minha primeira
            oportunidade profissional para aplicar e expandir meus
            conhecimentos, contribuindo para projetos inovadores e desafiadores.
            Comprometido com a melhoria contínua e a resolução de problemas
            complexos de forma eficiente e eficaz.
          </p>
        </div>
      </section>
    </>
  );
}
