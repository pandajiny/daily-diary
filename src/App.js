import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "typeface-roboto";

import Account from "./pages/account";
import Home from "./pages/home";

function App() {
  // const [loginState, setLoginState] = useState(false);

  // const getLogin = () => {
  //   console.log(`getLogin`);
  //   if (loginState) {
  //     console.log(`already Logged in, cancle Req`);
  //   } else {
  //     setLoginState(true);
  //     localStorage.setItem("loginState", true);
  //   }
  // };
  // const getLogout = () => {
  //   if (!loginState) {
  //     console.log(`already Logged out, cancle Req`);
  //   } else {
  //     setLoginState(false);
  //     localStorage.setItem("loginState", false);
  //   }
  // };
  return (
    <Router>
      <Switch>
        <Route exact path="/account">
          <Account />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
