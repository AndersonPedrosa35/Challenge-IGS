import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Context } from '../contexts/Context';

function Form() {
  const history = useHistory();
  const { email, setEmail, pass, setPass } = useContext(Context);
  const nameLength = 6;

  function submit(ev) {
    ev.preventDefault();
    localStorage.setItem('user', JSON.stringify({ email }));

    history.push('/');
  }

  return (
    <form className="login" onSubmit={ submit }>
      <div className="login-inputAndBtn-container">
        <label htmlFor="email">
          <h5>Email</h5>
          <input
            value={ email }
            className="login-input"
            autoComplete="off"
            placeholder="Digite seu email"
            onChange={ ({ target }) => setEmail(target.value) }
            type="email"
            id="email"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          <h5>Senha</h5>
          <input
            value={ pass }
            className="login-input"
            placeholder="Digite sua senha"
            onChange={ ({ target }) => setPass(target.value) }
            type="password"
            id="password"
            data-testid="password-input"
          />
        </label>
        <Button
          className="login-btn"
          type="submit"
          variant="info"
          data-testid="login-submit-btn"
          disabled={
            !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email)
          || pass.length <= nameLength
          }
        >
          Entrar
        </Button>
      </div>
    </form>
  );
}

export default Form;
