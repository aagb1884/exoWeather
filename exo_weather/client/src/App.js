import './App.css';
import HeaderNav from './Components/HeaderNav';
import Container from './Containers/Container';
import HomePage from './Components/HomePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <HeaderNav/>
       <Container />

       <HomePage/>

      </header>
    </div>
  );
}

export default App;