import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderNav from './Components/StyledComponents/HeaderNav';
import Container from './deprecated/Container';
import HomePage from './Components/HomePage';
import Planets from './Containers/PlanetBox.js'
import PlanetPage from './Components/PlanetPage'
import ErrorPage from './Components/ErrorPage';
import About from './Components/About'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <HeaderNav/>
       <Router>
          <Routes>
            <Route path="/" element={< HomePage />}/>
            <Route path="/planets" element={< Planets />}/> 
            <Route path="/planets/:id" element={< PlanetPage />}/> 
            <Route path="/about" element={< About />}/>
            <Route path="*" element={< ErrorPage />}/>
          </Routes>

      </Router>
      </header>

    </div>
  );
}

export default App;