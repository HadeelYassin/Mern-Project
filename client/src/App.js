import { Router } from '@reach/router';
import Main from './views/Main';
import './App.css';
import BuyTicketsComponent from './components/BuyTicketsComponent'
import AdminAdd from './components/AdminAdd'
import Home from './views/Home';
import BuyersList from './views/BuyersList';
import './styles/movies.css';
import React, { useState, useEffect } from 'react';
import MoviesAdmin from './views/MoviesAdmin'

function App() {
  
  return (
    <div className="App">
      <Router>
        <Main path="/admin"/>
        <AdminAdd path="/login/hi"/>
        <BuyTicketsComponent path="/new"/>
        <Home path="/"/>
<<<<<<< HEAD
        <BuyersList path="/info"/>
=======
        <BuyersList path="/admin/info"/>
        <MoviesAdmin path="/admin/movies"/>
>>>>>>> 5282625961909143fd61cde2862c4636c255e922
      </Router>
    </div>
  );
}

export default App;
