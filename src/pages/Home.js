import React from 'react';
import Header from '../components/Header';
import Carrosel from '../components/Carrosel';
import Footer from '../components/Footer';
import ModalHelp from '../components/ModalHelp';

export default function Home() {
  return (
    <div className="App">
      <Header />
      <ModalHelp />
      <Carrosel />
      <Footer />
    </div>
  );
}
