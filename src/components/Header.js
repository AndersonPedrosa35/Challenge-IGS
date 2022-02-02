import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import verSenha from "../assets/Archive/eye_idle.png";
import naoVerSenha from "../assets/Archive/eye_off_idle.png";
import userImage from "../assets/Archive/user_idle.png";
import help from "../assets/Archive/help_idle.png";
import logout from "../assets/Archive/logout_idle.png";
import { Context } from '../contexts/Context';
import ModalMenuMobile from './ModalMenuMobile';

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

function detectar_mobile() { 
  if( navigator.userAgent.match(/Android/i)
  || navigator.userAgent.match(/webOS/i)
  || navigator.userAgent.match(/iPhone/i)
  || navigator.userAgent.match(/iPad/i)
  || navigator.userAgent.match(/iPod/i)
  || navigator.userAgent.match(/BlackBerry/i)
  || navigator.userAgent.match(/Windows Phone/i)
  ){
     return true;
   }
  else {
     return false;
   }
 }

export default function Header() {
  const { setIsHelp, } = useContext(Context)
  const [see, setSee] = useState(false);

  return (
    <header className='header-image'>
      { detectar_mobile() === true ? (
        <ModalMenuMobile />
      ) : (
        <section className='header-container-left'
        role="section">
        <button
          type="button"
          className="button-icon"
          onClick={ () => setIsHelp(true)}
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
          <img src={ userImage } alt="Perfil" width={ "50px" } />
        </button>
      </section>
      ) }
      
      <section className="header-container-center"
      role="section">
        <h5>JACKPOT</h5>
        <span>$</span>
        <h3 className="jackpot">
          12
          <small>.</small>
          800<small>.</small>
          000
        </h3>
      </section>
      <section className='header-container-right'
      role="section">
        <button
          type="button"
          className="button-icon container-money"
          onClick={ () => setSee(!see) }
          data-testid="container-money"
        >
          { seeMoney(see) }
        </button>
      </section>
    </header>
  );
}
