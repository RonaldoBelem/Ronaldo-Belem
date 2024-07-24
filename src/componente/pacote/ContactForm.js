import React from "react";
import "../css/Sobre.css";

const ContactForm = () => {
  return (
    <form
      
      action="https://formsubmit.co/ronaldonunes8@gmail.com"
      method="POST"
    >
      <label for="name">Nome</label>
      <input id="name" type="text" name="name" />
      <label for="email">Email</label>
      <input id="email" type="text" name="email" />
      <label for="message">message</label>
      <textarea id="message" name="message"></textarea>

      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://ronaldo-belem.vercel.app/Sobre" />
      <input type="hidden" name="_autoresponse" value="Obrigado Pelo Contato, Em Breve Entrarei Em Contato"></input>
      <input className="btnform" type="submit" value="Submit" />
    </form>
  );
};

export default ContactForm;
