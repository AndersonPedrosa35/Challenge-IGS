import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './style/App.css';
import Home from './pages/Home';
import Provider from './contexts/Context';
import Perfil from './pages/Perfil';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Switch>
          <Route exact path='/perfil' render={ () => <Perfil /> } />
          <Route exact path='/login' render={ () => <Login /> } />
          <Route exact path='/' render={ () => <Home /> } />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
