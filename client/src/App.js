import { Router } from '@reach/router';
import Main from './views/Main';
import './App.css';
import AdminAdd from './components/AdminAdd';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/admin"/>
        <AdminAdd path="/login/hi"/>
      </Router>
    </div>
  );
}

export default App;
