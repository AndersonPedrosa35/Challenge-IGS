import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from "react"
import App from './App';

describe("Testando o componente header", () => {
  it('deve renderizar uma imagem de logout', () => {
    const { getByText } = render(<App />);
    const logout = getByText("Estamos online (comemore)");
    expect(logout).toBeInTheDocument();
  });

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
})
