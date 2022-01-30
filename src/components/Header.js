import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import verSenha from "../assets/Archive/eye_idle.png";
import naoVerSenha from "../assets/Archive/eye_off_idle.png";
import userImage from "../assets/Archive/user_idle.png";
import help from "../assets/Archive/help_idle.png";
import logout from "../assets/Archive/logout_idle.png"

function seeMoney(state) {
  if (state === true) {
    return (
      <>
        <span>$</span>
        <strong>0000,00</strong>
        <img src={ verSenha } alt="seeMoney" width={ "35px" } /> 
      </>
    )
  }
  return (
    <>
      <span>$</span>
      <span>______________</span>
      <img src={ naoVerSenha } alt="notSeeMoney" width={ "35px" } /> 
    </>
  )
}

export default function Header() {
  const [see, setSee] = useState(false);
  const [isHelp, setIsHelp] = useState(false);

  return (
    <header className='header-image'>
      <section className='header-container-left'>
        <button
          type="button"
          className="button-icon"
          onClick={ () => setIsHelp(!isHelp)}
        >
          <img src={ help } alt="Ajuda" width={ "50px" } />
        </button>
        <button
          type="button"
          className="button-icon"
          onClick={ () => <Link to="home" /> }
        >
          <img src={ logout } alt="Sair da conta" width={ "50px" } />
        </button>
        <button
          type="button"
          className="button-icon"
          onClick={ () => <Link to="home" /> }
        >
          <img src={ userImage } alt="Sair da conta" width={ "50px" } />
        </button>
      </section>
      <section className="header-container-center">
        <h5>JACKPOT</h5>
        <span>$</span>
        <h3 className="jackpot">
          12
          <small>.</small>
          800<small>.</small>
          000
        </h3>
      </section>
      <section className='header-container-right'>
        <button
          type="button"
          className="button-icon container-money"
          onClick={ () => setSee(!see) }
        >
          { seeMoney(see) }
        </button>
      </section>
    </header>
  );
}
