import {AccountInformation} from "./component/AccountInformation";
import {GoogleButton} from "./component/GoogleButton";
import {IDChecker} from "./component/IDChecker";

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
                <IDChecker/>
            </header>
        </div>
    );
}

export default App;
