import React from 'react';
import './style/App.css';
import Header from './components/Header';
import Carrosel from './components/Carrosel';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Carrosel />
      <Footer />
    </div>
  );
}

export default App;
