import React from "react";
import "../css/Rodape.css"

export default function Rodape() {
  return (
    <footer>
      <ul>
        <li>
          <a
            target="blank"
            href="https://api.whatsapp.com/send?phone=5591988633253"
          >
            <i class="bi bi-whatsapp"></i>
          </a>
        </li>
        <li>
          <a
            target="blank"
            href="https://www.linkedin.com/in/ronaldo-nunes-belem/"
          >
            <i class="bi bi-linkedin"></i>
          </a>
        </li>
        <li>
          <a target="blank" href="https://github.com/RonaldoBelem">
            <i class="bi bi-github"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}
