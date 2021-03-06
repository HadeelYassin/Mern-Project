import { Router } from '@reach/router';
import Main from './views/Main';
import './App.css';
import Home from './views/Home';
import BuyersList from './views/BuyersList';
import './styles/movies.css';
import React, { useState, useEffect } from 'react';
import MoviesAdmin from './views/MoviesAdmin'
import BuyTicket from './components/BuyTicket';
//import AdminHome from './views/AdminHome';



function App() {

  return (
    <div className="App">
      <Router>
        <Home path="/"/>
        <Main path="/admin"/>
        {/* <AdminHome path="/login/hi"/> */}
        <BuyTicket path="/tickets/:id"/>
        <BuyersList path="/admin/info"/>
       <MoviesAdmin path="/admin/movies"/>
      </Router>
    </div>
  );
}

export default App;
