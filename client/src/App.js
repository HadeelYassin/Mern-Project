import { Router } from '@reach/router';
import Main from './views/Main';
import './App.css';
import BuyTicketsComponent from './components/BuyTicketsComponent'
import AdminAdd from './components/AdminAdd'
import Home from './views/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/admin"/>
        <AdminAdd path="/login/hi"/>
        <BuyTicketsComponent path="/new"/>
        <Home path="/"/>
      </Router>
    </div>
  );
}

export default App;
