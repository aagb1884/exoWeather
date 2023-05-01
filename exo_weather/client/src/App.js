import './App.css';
import Header_Nav from './Components/Header_Nav';
import Container from './Containers/Container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header_Nav />
       <Container />
      </header>
    </div>
  );
}

export default App;
