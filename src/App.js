import React from "react";
import Navigation from "./components/navigation";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import PageRenderer from "./page-renderer"

function App() {
  const user = {
    firstName: "CFM",
    lastName: "Admin"
  }
  return (
    <Router>
      <div className="App">
        <Navigation user={user} />
        <Switch>
          <Route path="/:page" component={PageRenderer} />
          <Route path="/" render={() => <Redirect to="/home" />} />
          <Route component={() => 404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
