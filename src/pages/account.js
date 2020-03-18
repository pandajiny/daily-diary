import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "react-apollo";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignInEmail from "./SignInEmail";
import SignUp from "./SignUp";
import SignInPassword from "./SignInPassword";
import LoginPassed from "./LoginResult";

const LOGIN_MUTATION = gql`
  mutation login($email: String, $password: String) {
    login(email: $email, password: $password) {
      passed
    }
  }
`;

const Account = props => {
  const [currentPage, setPage] = useState("signinemail");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginPassed, setLoginPassed] = useState(false);

  const [loginMutation] = useMutation(LOGIN_MUTATION, {
    onCompleted: data => {
      // console.log(`result : ${data.login.passed}`);
      setLoginPassed(data.login.passed);
      handlePageChange("loginresult");
    }
  });

  const handleEmailChange = emailaddress => {
    setEmail(emailaddress.toString());
  };
  const handlePasswordChange = password => {
    setPassword(password.toString());
  };

  const tryLogin = () => {
    // console.log(`tryLogin!`);
    loginMutation({ variables: { email, password } });
    handlePageChange("loginresult");
  };

  const handlePageChange = nextState => {
    if (nextState.toString() === "signinemail") {
      setPage("signin");
    }
    if (nextState.toString() === "signinpass") {
      setPage("signinpass");
    }
    if (nextState.toString() === "signup") {
      setPage("signup");
    }
    if (nextState.toString() === "loginresult") {
      setPage("loginresult");
    }
    // console.log(`current Page : ${currentPage}`);
  };

  if (props.loginState) {
    console.log();
    handlePageChange("loginpassed");
  } else {
    handlePageChange("signinemail");
  }

  return (
    <div>
      {currentPage === "signinemail" && (
        <div>
          <SignInEmail
            handleEmailChange={handleEmailChange}
            handlePageChange={handlePageChange}
          />
        </div>
      )}
      {currentPage === "signinpass" && (
        <div>
          <SignInPassword
            currentEmail={email}
            handlePasswordChange={handlePasswordChange}
            tryLogin={tryLogin}
            handlePageChange={handlePageChange}
          />
        </div>
      )}
      {currentPage === "loginpassed" && (
        <div>
          <LoginPassed
            email={email}
            password={password}
            handleLogout={props.handleLogout}
            handlePageChange={handlePageChange}
          />
        </div>
      )}
      {currentPage === "signup" && (
        <div>
          <SignUp handlePageChange={handlePageChange} />
        </div>
      )}
    </div>
  );
};

export default Account;
