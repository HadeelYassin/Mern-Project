import { Router } from '@reach/router';
import Main from './views/Main';
import './App.css';
import AdminAdd from './components/AdminAdd'
import Home from './views/Home';
import BuyersList from './views/BuyersList';
import './styles/movies.css';
import React, { useState, useEffect } from 'react';
import MoviesAdmin from './views/MoviesAdmin'
import BuyTicket from './components/BuyTicket';
function App() {
  
  return (
    <div className="App">
     
      <Router>
        <Main path="/admin"/>
        <AdminAdd path="/login/hi"/>
        <BuyTicket path="/tickets"/>
        <Home path="/"/>
        <BuyersList path="/admin/info"/>
        <MoviesAdmin path="/admin/movies"/>
      </Router>
    </div>
  );
}

export default App;
