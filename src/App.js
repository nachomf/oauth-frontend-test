import {AccountInformation} from "./component/AccountInformation";
import {GoogleButton} from "./component/GoogleButton";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <br/>
                <br/>
                <GoogleButton/>
                <br/>
                <br/>
                <AccountInformation/>
            </header>
        </div>
    );
}

export default App;
