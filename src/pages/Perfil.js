import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../contexts/Context';
import { getUserOrRedirectLogin } from '../utils/getUserOrRedirect';
import { logout } from '../utils/Logout';
import logoutImg from '../assets/Archive/logout_idle.png';
import "../style/Perfil.css";

export default function Perfil() {
  const { setEmail, email } = useContext(Context);
  const history = useHistory();

  useEffect(() => {
    getUserOrRedirectLogin(setEmail, history);
  }, [])
  return (
      <section className="perfil">
          <h1>{`Olá ${email}`}</h1>
          <p>Seus rendimentos $0000,00</p>
          <button
            type="button"
            className="button-icon"
            onClick={ () => logout(history) }
          >
            <img src={ logoutImg } alt="Sair da conta" width={ "50px" } />
          </button>
      </section>
  );
}
