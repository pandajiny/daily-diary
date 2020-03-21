import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import LoginEmail from "../components/Account/LoginEmail";
import LoginPassword from "../components/Account/LoginPassword";
import LoginResult from "../components/Account/LoginResult";

const Login = () => {
  const checkLoginState = () => {
    return localStorage.getItem("loginState") === "true";
  };

  return (
    <div className="account_login">
      <Switch>
        <Route
          path="/account/login/email"
          render={() =>
            checkLoginState() ? (
              <Redirect to="/account/login/result" />
            ) : (
              <LoginEmail />
            )
          }
        />
        <Route
          path="/account/login/password"
          render={() => <LoginPassword />}
        />
        <Route path="/account/login/result" render={() => <LoginResult />} />
        <Route
          render={() =>
            checkLoginState ? (
              <Redirect to="/account/login/result" />
            ) : (
              <Redirect to="/account/login/email" />
            )
          }
        />
      </Switch>
    </div>
  );
};

export default Login;
