import React, { useState } from "react";

import * as EmailValidator from "email-validator";
import gql from "graphql-tag";
import { useMutation } from "react-apollo";

import SignInEmail from "./SignInEmail";
import SignUp from "./SignUp";
import SignInPassword from "./SignInPassword";
import LoginPassed from "./LoginPassed";

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

  const [loginMutation] = useMutation(LOGIN_MUTATION, {
    onCompleted: data => {
      console.log(`result : ${data.login.passed}`);
      if (data.login.passed) {
        console.log(`passed`);
        props.handleLogin();
        handlePageChange("loginpassed");
      } else {
        handlePageChange("loginfailed");
      }
    }
  });

  const handleEmailChange = emailaddress => {
    setEmail(emailaddress.toString());
  };
  const handlePasswordChange = password => {
    setPassword(password.toString());
  };

  const tryLogin = () => {
    console.log(`tryLogin!`);
    loginMutation({ variables: { email, password } });
  };

  const emailValidator = () => {
    return EmailValidator.validate(email);
  };

  const handlePageChange = nextState => {
    if (nextState.toString() === "signinemail") {
      setPage("signinemail");
    }
    if (nextState.toString() === "signinpass") {
      setPage("signinpass");
    }
    if (nextState.toString() === "signup") {
      setPage("signup");
    }
    if (nextState.toString() === "loginpassed") {
      setPage("loginpassed");
    }
    if (nextState.toString() === "loginfailed") {
      setPage("loginfailed");
    }
    // console.log(`current Page : ${currentPage}`);
  };

  return (
    <div>
      {currentPage === "signinemail" && !props.loginState && (
        <div>
          <SignInEmail
            handleEmailChange={handleEmailChange}
            handlePageChange={handlePageChange}
            emailValidator={emailValidator}
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
      {(currentPage === "loginpassed" || props.loginState) && (
        <div>
          <LoginPassed
            email={email}
            handleLogout={props.handleLogout}
            handlePageChange={handlePageChange}
          />
        </div>
      )}
      {currentPage === "loginfailed" && (
        <div>
          <SignInPassword
            currentEmail={email}
            handlePasswordChange={handlePasswordChange}
            tryLogin={tryLogin}
            handlePageChange={handlePageChange}
            tryAgain={true}
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
