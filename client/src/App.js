import { Router } from '@reach/router';
import Main from './views/Main';
import './App.css';
import BuyTicketsComponent from './components/BuyTicketsComponent'

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/admin"/>
        <AdminAdd path="/login/hi"/>
        <BuyTicketsComponent path="/new"/>
      </Router>
    </div>
  );
}

export default App;
