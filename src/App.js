import Toggle from './Main';
import {ReactLogo} from './component/ReactLogo';
import {SimpleParagraph} from './component/SimpleParagraph';
import Calculator from './component/Calculator';
import {AccountInformation} from "./component/AccountInformation";
import {GoogleButtonBody} from "./component/GoogleButtonBody";

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
        <GoogleButtonBody/>
        <AccountInformation/>
      </header>
    </div>
  );
}

export default App;
