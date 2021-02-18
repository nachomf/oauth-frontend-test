import logo from './logo.svg';
import Toggle from './Main';
import { ReactLogo } from './exercises/ReactLogo';
import { SimpleParagraph } from './exercises/SimpleParagraph';
import Calculator from './exercises/Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReactLogo/>
        <SimpleParagraph text={<div>Edit <code>src/App.js</code> and save to reload.</div>}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Toggle/>
        <ReactLogo/>
        <SimpleParagraph text="Some Text"/>
        <Calculator/>
      </header>
    </div>
  );
}

export default App;
