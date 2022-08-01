import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This website is running smooth
        </p>
        <a
          className="App-link"
          href="https://github.com/microverseinc/curriculum-react-redux/blob/main/math-magicians/sneak_peek.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          Math Magicians
        </a>
      </header>
    </div>
  );
}

export default App;
