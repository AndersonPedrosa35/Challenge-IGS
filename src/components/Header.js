import React from 'react';
import verSenha from "../assets/Archive/eye_idle.png";
import naoVerSenha from "../assets/Archive/eye_off_idle.png";
import help from "../assets/Archive/help_idle.png";
import logout from "../assets/Archive/logout_idle.png"

export default function Header() {
  return (
    <header className='header'>
        <section className='header-container-left'>
            <img src={ logout } alt="Sair da conta" width={"50px"} />
            <img src={ help } alt="Ajuda" width={"50px"} />
        </section>
      <p>Estamos online (comemore) </p>
      <section className='header-container-right'>
            <h3>$ </h3>
            <img src={ verSenha } alt="Dinheiro" width={ "35px" }/>
        </section>
    </header>
  );
}
