import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Carrosel from '../components/Carrosel';
import Footer from '../components/Footer';
import ModalHelp from '../components/ModalHelp';
import { Context } from '../contexts/Context';
import { getUserOrRedirectLogin } from '../utils/getUserOrRedirect';

export default function Home() {
  const { setEmail, history } = useContext(Context);

  

  useEffect(() => {
    getUserOrRedirectLogin(setEmail, history)
  }, [])


  return (
    <div className="App">
      <Header />
      <ModalHelp />
      <Carrosel />
      <Footer />
    </div>
  );
}
