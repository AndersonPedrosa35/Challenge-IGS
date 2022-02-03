import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

export const Context = createContext();

function Provider({ children }) {
  const [isHelp, setIsHelp] = useState(false);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const history = useHistory();

  const states = {
    isHelp,
    setIsHelp,
    email,
    setEmail,
    pass,
    setPass,
    history
  }

  return (
    <Context.Provider value={ states }>
      { children }
    </Context.Provider>
  )
}

export default Provider;