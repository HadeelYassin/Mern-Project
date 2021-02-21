import { Router } from '@reach/router';
import Main from './views/Main';
import './App.css';
import BuyTicketsComponent from './components/BuyTicketsComponent'
import AdminAdd from './components/AdminAdd'
import Home from './views/Home';
import BuyersList from './views/BuyersList';
import MoviesAdmin from './views/MoviesAdmin';
function App() {
  
  return (
    <div className="App">
      <Router>
        <Main path="/admin"/>
        <AdminAdd path="/login/hi"/>
        <BuyTicketsComponent path="/new"/>
        <Home path="/"/>
        <BuyersList path="/admin/info"/>
        <MoviesAdmin path="/admin/movies"/>
      </Router>
    </div>
  );
}

export default App;
