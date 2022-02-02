import React, { createContext, useState } from 'react';

export const Context = createContext();

function Provider({ children }) {
  const [isHelp, setIsHelp] = useState(false);

  const states = {
    isHelp,
    setIsHelp,
  }

  return (
    <Context.Provider value={ states }>
      { children }
    </Context.Provider>
  )
}

export default Provider;