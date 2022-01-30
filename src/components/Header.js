import React, { useState } from 'react';
import verSenha from "../assets/Archive/eye_idle.png";
import naoVerSenha from "../assets/Archive/eye_off_idle.png";
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
        <section className="header-container-center">
          <h5>jackpot</h5>
          <span>$</span>
          <h3 className="jackpot">
            26
            <small>.</small>
            000<small>.</small>
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
