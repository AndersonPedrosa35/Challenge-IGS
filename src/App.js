import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './style/App.css';
import Home from './pages/Home';
import Provider from './contexts/Context';
import Perfil from './pages/Perfil';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Route exact path='/' render={ () => <Home /> } />
        <Route path='/perfil' render={ () => <Perfil /> } />
        <Route path='/login' render={ () => <Login /> } />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
