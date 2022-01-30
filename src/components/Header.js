import React, { useState } from 'react';
import verSenha from "../assets/Archive/eye_idle.png";
import naoVerSenha from "../assets/Archive/eye_off_idle.png";
import help from "../assets/Archive/help_idle.png";
import logout from "../assets/Archive/logout_idle.png"

function seeMoney(state) {
    if (state === true) {
      return (
        <>
          <h3>$ </h3>
          <p>0000,00</p>
          <img src={ verSenha } alt="Dinheiro" width={ "35px" } /> 
        </>
      )
    }
    return (
      <>
        <h3>$ </h3>
        <span>______________</span>
        <img src={ naoVerSenha } alt="Dinheiro" width={ "35px" } /> 
      </>
    )
}

export default function Header() {
    const [see, setSee] = useState(false);

  return (
    <header className='header'>
        <section className='header-container-left'>
				  <button
						type="button"
						className="button-icon"
						onClick={ () => console.log("CLICOU") }
					>
            <img src={ logout } alt="Sair da conta" width={ "50px" } />
					</button>
					<button
						type="button"
						className="button-icon"
						onClick={ () => console.log("CLICOU")}
					>
            <img src={ help } alt="Ajuda" width={ "50px" } />
					</button>
        </section>
      <p>Estamos online (comemore) </p>
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
