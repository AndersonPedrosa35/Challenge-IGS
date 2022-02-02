import { createContext, useState } from 'react';

export const Context = createContext();

function Provider({ children }) {
  const [isHelp, setIsHelp] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  const states = {
    isHelp,
    setIsHelp,
    isMenu,
    setIsMenu
  }

  return (
    <Context.Provider value={ states }>
      { children }
    </Context.Provider>
  )
}