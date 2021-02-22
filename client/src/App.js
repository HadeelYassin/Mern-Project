import { Router } from '@reach/router';
import Main from './views/Main';
import './App.css';
import BuyTicketsComponent from './components/BuyTicketsComponent'
import Home from './views/Home';
import BuyersList from './views/BuyersList';
import './styles/movies.css';
import React, { useState, useEffect } from 'react';
import MoviesList from './components/MoviesList'


function App() {
  
  return (
    <div className="App">
      <Router>
        <Main path="/admin"/>
        <BuyTicketsComponent path="/new"/>
        <Home path="/"/>
        <BuyersList path="/info"/>
        
      </Router>
    </div>
  );
}

export default App;
