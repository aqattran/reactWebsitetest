import logo from './logo.svg';
import './App.css';

function App() {
  /* const name = "Alice" */
  const handleNameChange = () => {
    const names = ['Alice', 'Mihir', 'Margaret', 'Megan'];
    const int = Math.floor(Math.random()*4);
    return names[int];
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Testing this out - {handleNameChange()}!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
     {/*  <p>{name}</p> */}
      </header>
    </div>
  );
}

export default App;
