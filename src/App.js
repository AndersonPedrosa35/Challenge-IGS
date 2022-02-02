import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './style/App.css';
import Home from './pages/Home';
import Provider from './contexts/Context';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Route path='/' render={ () => <Home /> } />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
