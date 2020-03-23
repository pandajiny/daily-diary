import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";

import Account from "./Account";
import Notes from "../components/Notes/Notes";
import Calendar from "../components/Calendar/Calendar";

function Router() {
  return (
    <div className="router">
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/notes" />} />
        <Route path="/account" render={() => <Account />} />
        <Route path="/notes" render={() => <Notes />} />
        <Route path="/calendar" render={() => <Calendar />} />
        <Route render={() => <p>404 not found.</p>} />
      </Switch>
    </div>
  );
}

export default Router;
