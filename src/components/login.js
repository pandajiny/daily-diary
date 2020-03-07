import React, { useState } from "react";
// import { AUTH_TOKEN } from "../constants";
import { useMutation } from "react-apollo";
import gql from "graphql-tag";

const SIGNUP_MUTATION = gql`
  mutation signup($email: String, $password: String, $name: String) {
    signup(email: $email, password: $password, name: $name) {
      passed
    }
  }
`;

const LOGIN_MUTATION = gql`
  mutation login($email: String, $password: String) {
    login(email: $email, password: $password) {
      passed
    }
  }
`;

const Login = props => {
  const [login, setLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const tryLogin = data => {
    console.log(`tryLogin`);
    console.log(data.login.passed);
    if (data.login.passed) {
      console.log("passed");
      props.getLogin();
    }
  };

  const [loginMutation] = useMutation(LOGIN_MUTATION, {
    onCompleted: tryLogin
  });
  const [signupMutation, { data }] = useMutation(SIGNUP_MUTATION);

  return (
    <div>
      <h4>{login ? "Login" : "Sign Up"} </h4>

      <div>
        {" "}
        {!login && (
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            //   type="text"
            placeholder="GILDO"
          />
        )}
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="text"
          placeholder="GILDOGI@naver.com"
        />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          // type="text"
          placeholder="Chosse your password"
        />
      </div>
      {login ? (
        <button
          onClick={() => loginMutation({ variables: { email, password } })}
        >
          Login
        </button>
      ) : (
        <button
          onClick={() =>
            signupMutation({ variables: { email, password, name } })
          }
        >
          Signup
        </button>
      )}
      <div onClick={() => setLogin(login => !login)}>
        {login ? "Do you wanna Signup?" : "Do you wanna Login?"}
      </div>
    </div>
  );
};

export default Login;
