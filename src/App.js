import logo from "./logo.svg";
import "./App.css";
import AccountSettings from "./pages/account-settings/account-settings";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PersonalInfo from "./pages/personal-info/Personal-info";

function App() {
  return (
    <>
      <div className="App">Airbnb</div>
      <Router>
        <div>
          <Switch>
            <Route path="/account-settings" exact component={AccountSettings} />
            <Route
              path="/account-settings/personal-info"
              exact
              component={PersonalInfo}
            />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
