import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Header from "./components/particles/Header";
import Panel from "./components/particles/Panel";
import Inbox from "./components/views/Inbox";
import ArchivedCalls from "./components/views/ArchivedCalls";
import AllCalls from "./components/views/AllCalls";

import CallSettings from "./components/views/CallSettings";

const App = () => {
  document.title = "(1+) Aircall Phone";

  return (
    <Router>
      <div className="app-container d-flex flex-column" id="app">
        <Header />
        <div className="view-wrapper">
                  <Switch>
          <Route exact path="/">
            <Inbox />
          </Route>
          <Route path="/archivedcalls">
            <ArchivedCalls />
          </Route>
          <Route path="/allcalls">
            <AllCalls />
          </Route>
          <Route path="/callsettings">
            <CallSettings />
          </Route>
          <Redirect to="/" />
        </Switch>
        </div>

        <Panel />
      </div>
    </Router>
  );
};

export default App;
