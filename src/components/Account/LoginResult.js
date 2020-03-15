import React from "react";

const LoginResult = props => {
  return (
    <div>
      <p>LoginResult</p>
      <p>email : {props.email} </p>
      <p>password : {props.password} </p>
      <p>passed : {props.passed ? "passed" : "fail"}</p>
    </div>
  );
};

export default LoginResult;
