import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from "react"
import renderWithRoute from './renderWithRouter';
import App from '../App';
import jogos from '../data/jogos.js';


const user = {
  email: "teste.teste@hotmail.com",
  senha: "1234567"
}

describe("Testando a pagina Login", () => {
  it("Deve renderizar uma label com o texto Email e com um input", () => {
    const { getByLabelText } = renderWithRoute(<App />);
    const email = getByLabelText("Email");
    expect(email).toBeInTheDocument();
  });
  it("Deve renderizar uma label com o texto Senha e com um input", () => {
    const { getByLabelText } = renderWithRoute(<App />);
    const senha = getByLabelText("Senha");
    expect(senha).toBeInTheDocument();
  })
  it("Deve renderizar um botão desabilitado", () => {
    const { getByTestId, } = renderWithRoute(<App />)
    const button = getByTestId('login-submit-btn');
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
  it("Deve ser redirecionado para a Home", () => {
    const { getByLabelText, getByTestId, history } = renderWithRoute(<App />);
    const email = getByLabelText("Email");
    const senha = getByLabelText("Senha");

    userEvent.type(email, user.email);
    userEvent.type(senha, user.senha);

    const button = getByTestId('login-submit-btn');
    expect(button).toBeEnabled();
    
    userEvent.click(button);
    expect(history.location.pathname).toBe('/');
  })
});

describe("Testando o componente header", () => {
  beforeAll(() => {
    localStorage.setItem('user', JSON.stringify(user))
  });
  it('deve renderizar uma imagem de logout', () => {
    const { getByAltText, history } = renderWithRoute(<App />);

    history.push('/');

    const logout = getByAltText('Sair da conta');
    expect(logout).toBeInTheDocument();
  });

  it('deve renderizar um icone de perfil', () => {
    const { getByAltText } = renderWithRoute(<App />);
    const perfilIcon = getByAltText("Perfil");
    expect(perfilIcon).toBeInTheDocument();
  })

  it("deve renderizar um icone de ajuda", () => {
    const { getByAltText } = renderWithRoute(<App />);
    const iconHelp = getByAltText("Ajuda");
    expect(iconHelp).toBeInTheDocument();
  });

  it('deve renderizar uma imagem de mostrar e não mostrar dinheiro', () => {
    const { getByAltText } = renderWithRoute(<App />);
    const iconNotSee = getByAltText("notSeeMoney");
    expect(iconNotSee).toBeInTheDocument();

    userEvent.click(iconNotSee);

    const iconSee = getByAltText("seeMoney");
    expect(iconSee).toBeInTheDocument();
  });

  it('deve renderizar o preço do premio máximo jackpot', () => {
    const { getAllByRole } = renderWithRoute(<App />);
    const jackpotContainer = getAllByRole("section");
    expect(jackpotContainer[1]).toHaveClass("header-container-center");

    const jackpot = getAllByRole('heading', { level: 3 });
    expect(jackpot[0]).toHaveTextContent("12");
  });

  it('deve renderizar o valor que eu tenho em caixa no campo dos meus valores', async () => {
    const { getByTestId, findByText } = renderWithRoute(<App />);
    const moneyContainer = getByTestId("container-money");
    const textMoney = moneyContainer.childNodes[1].textContent;
    expect(textMoney).toBe("______________");

    userEvent.click(moneyContainer);
    const money = findByText("0000,00");
    waitFor(() => expect(money).toBeInTheDocument());
  });

  it('Deve renderizar um pop-up de ajuda para o usuário', () => {
    const { getAllByTestId, getByRole } = renderWithRoute(<App />);
    const help = getAllByTestId('container-img')[0];

    userEvent.click(help);
    const modalHelp = getByRole('dialog');
    expect(modalHelp).toBeInTheDocument();
  })

  it('Deve ser redirecionado para a página de Login', () => {
    const { getAllByTestId, getByLabelText } = renderWithRoute(<App />);
    const perfilIcon = getAllByTestId('container-img');

    userEvent.click(perfilIcon[1]);
    const email = getByLabelText('Email');
    expect(email).toBeInTheDocument();
  });
});

describe('Testando o Carrosel da Home', () => {
  beforeAll(() => {
    const { getByLabelText, getByTestId, history } = renderWithRoute(<App />);
    const email = getByLabelText("Email");
    const senha = getByLabelText("Senha");

    userEvent.type(email, user.email);
    userEvent.type(senha, user.senha);

    const button = getByTestId('login-submit-btn');
    userEvent.click(button);
  });

  it('Deve renderizar imagens', () => {
    const { getAllByRole } = renderWithRoute(<App />);
    const carrossel = getAllByRole('imagens');
    carrossel[0].childNodes.forEach((link) => {
      expect(link).toBeInTheDocument();
      expect(link.childNodes[0]).toBeVisible()
    });
  });

  it('Fazendo logout', () => {
    const { getAllByTestId, getByLabelText } = renderWithRoute(<App />);
    const perfilIcon = getAllByTestId('container-img');

    userEvent.click(perfilIcon[1]);
    const email = getByLabelText('Email');
    expect(email).toBeInTheDocument();
  })
});

describe('Testando a pagina de perfil', () => {
  beforeAll(() => {
    const { getByLabelText, getByTestId, history } = renderWithRoute(<App />);
    const email = getByLabelText("Email");
    const senha = getByLabelText("Senha");

    userEvent.type(email, user.email);
    userEvent.type(senha, user.senha);

    const button = getByTestId('login-submit-btn');
    userEvent.click(button);
  });
  it("Deve renderizar o texto olá {nome do email} na pagina de perfil", () => {
    const { getByRole, getAllByTestId, history } = renderWithRoute(<App />);
    const perfilIcon = getAllByTestId('container-img');
    userEvent.click(perfilIcon[2]);
    const welcome = getByRole('heading', {
      level: 1
    });
    expect(welcome).toHaveTextContent(`Olá ${user.email}`);
  });

  it("Deve renderizar os rendimentos da conta", () => {
    const { getByRole } = renderWithRoute(<App />);
    const money = getByRole('paragraph');
    expect(money).toHaveTextContent('Seus rendimentos');
  });

  it("Deve renderizar um icone logout", () => {
    const { getByRole } = renderWithRoute(<App />);
    const iconLogout = getByRole('button');
    expect(iconLogout).toHaveClass('button-icon');
    expect(iconLogout.childNodes[0]).toHaveAttribute('alt', 'Sair da conta');
    expect(iconLogout.childNodes[0]).toHaveAttribute('src', 'logout_idle.png');
  });

  it("Deve ser redirecionado para a Home", () => {
    const { getByRole, getByLabelText } = renderWithRoute(<App />);
    const iconLogout = getByRole('button');

    userEvent.click(iconLogout);

    const login = getByLabelText('Email');
    expect(login).toBeInTheDocument();
  });
});
