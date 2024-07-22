import React from "react";

export default function Formulario() {
  

  return (
    <form target="Blank" action="https://api.staticforms.xyz/submit" method="post">
      <h2>Contato</h2>
       
        <input type="hidden" name="accessKey" value="f5abf97d-ed77-443d-abce-3e74b38a5c05" /> 
        <label for="name">Nome</label>
        <input id="name" type="text" name="name" />  
        <label for="email">Email</label>
        <input id="email" type="text" name="email" /> 
        <label for="phone">Telefone</label>
        <input id="phone" type="text" name="phone" /> 
        <label for="message">Mensagem</label>
        <textarea id="message" name="message"></textarea> 
        <input type="hidden" name="replyTo" value="myreplytoemail@example.com" /> 
        <input type="hidden" name="replyTo" value="@" />
        <input type="hidden" name="redirectTo" value="https://example.com/contact/success" /> 
        <input className="btnform" type="submit" value="Enviar" />
    </form>
  );
}
