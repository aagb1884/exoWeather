import './App.css';
import HeaderNav from './Components/HeaderNav';
import Container from './Containers/Container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <HeaderNav/>
       
       <Container />
      </header>
    </div>
  );
}

export default App;