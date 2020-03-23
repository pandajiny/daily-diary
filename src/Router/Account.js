import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "./Account_Login";
import AccountHome from "../components/Account/AccountHome";
import Error from "./Error";

const Account = () => {
  console.log("account");

  return (
    <div className="account">
      <Switch>
        <Route exact path="/account/" render={() => <AccountHome />} />
        <Route path="/account/login" render={() => <Login />} />
        <Route path="/account/signup" render={() => <div>Sign up!</div>} />
        <Route
          path="/account/lost"
          render={() => <div>I lost My account</div>}
        />
        <Route path="/account/profile" render={() => <div>My profile</div>} />
        <Route render={props => <Error {...props} />} />
      </Switch>
    </div>
  );
};

export default Account;
