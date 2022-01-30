import React from 'react';
import './style/App.css';
import Header from './components/Header';
import ListCards from './components/ListCards';

function App() {
  return (
    <div className="App">
      <Header />
      <ListCards />
    </div>
  );
}

export default App;
