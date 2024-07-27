import React from "react";
import Inicio from "./componente/Inicio";
import Projetos from "./componente/Projetos";
import Rodape from "./componente/pacote/Rodape";
import Sobre from "./componente/Sobre";
import { Routes, Route, Link } from "react-router-dom";
import logo from "./componente/img/_Dev_-removebg-preview.png";
import "./App.css";

export default function App() {
  return (
    <>
      
        <header>
          <div>
            <Link to="/" className="logo">
              <img src={logo} alt="" />
            </Link>
          </div>
          <nav>
            <Link className="cabecalho" to="/">
              Inicio
            </Link>
            <Link className="cabecalho" to="/Projetos">
              Projetos
            </Link>
            <Link className="cabecalho" to="/Sobre">
              Sobre
            </Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Projetos" element={<Projetos />} />
            <Route path="/Sobre" element={<Sobre />} />
          </Routes>
        </main>
        <footer>
          <Rodape />
        </footer>
      
    </>
  );
}
