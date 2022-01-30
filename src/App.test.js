import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from "react"
import App from './App';

describe("Testando o componente header", () => {
  it('deve renderizar uma imagem de logout', () => {
    const { getByAltText } = render(<App />);
    const logout = getByAltText('Sair da conta');
    expect(logout).toBeInTheDocument();
  });

  it('deve renderizar um icone de perfil', () => {
    const { getByAltText } = render(<App />);
    const perfilIcon = getByAltText("Perfil");
    expect(perfilIcon).toBeInTheDocument();
  })

  it("deve renderizar um icone de ajuda", () => {
    const { getByAltText } = render(<App />);
    const iconHelp = getByAltText("Ajuda");
    expect(iconHelp).toBeInTheDocument();
  });

  it('deve renderizar uma imagem de mostrar e não mostrar dinheiro', () => {
    const { getByAltText } = render(<App />);
    const iconNotSee = getByAltText("notSeeMoney");
    expect(iconNotSee).toBeInTheDocument();

    userEvent.click(iconNotSee);

    const iconSee = getByAltText("seeMoney");
    expect(iconSee).toBeInTheDocument();
  });

  it('deve renderizar o preço do premio máximo jackpot', () => {
    const { getAllByRole } = render(<App />);
    const jackpotContainer = getAllByRole("section");
    expect(jackpotContainer[1]).toHaveClass("header-container-center");

    const jackpot = getAllByRole('heading', { level: 3 });
    expect(jackpot[0]).toHaveTextContent("12");
  })
})
