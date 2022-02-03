import React, { createContext, useState } from 'react';

export const Context = createContext();

function Provider({ children }) {
  const [isHelp, setIsHelp] = useState(false);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const states = {
    isHelp,
    setIsHelp,
    email,
    setEmail,
    pass,
    setPass
  }

  return (
    <Context.Provider value={ states }>
      { children }
    </Context.Provider>
  )
}

export default Provider;