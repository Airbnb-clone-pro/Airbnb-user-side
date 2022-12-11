import logo from "./logo.svg";
import "./App.css";
import AccountSettings from "./pages/account-settings/account-settings";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PersonalInfo from "./pages/personal-info/Personal-info";
import Header from "./components/header";
import Unit from "./pages/unit/unit";
import "./pages/unit/unit.scss";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/account-settings" exact component={AccountSettings} />
          <Route
            path="/account-settings/personal-info"
            exact
            component={PersonalInfo}
          />
          <Route path="/units/:unitId" exact component={Unit} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
