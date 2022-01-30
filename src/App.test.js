import { render } from '@testing-library/react';
import React from "react"
import App from './App';

describe("Testando o componente header", () => {
  it.only('testando as imagem de logout', () => {
    const { getByText } = render(<App />);
    const logout = getByText("Estamos online (comemore)");
    expect(logout).toBeInTheDocument();
  });
})
