import React from 'react';
import Header from '../components/Header';
import Carrosel from '../components/Carrosel';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="App">
      <Header />
      <Carrosel />
      <Footer />
    </div>
  );
}
