import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element/>
    
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
