import React, { useState } from "react";
// import { AUTH_TOKEN } from "../constants";
import { useMutation } from "react-apollo";
import gql from "graphql-tag";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Avatar,
  Typography,
  Grid,
  Box,
  TextField,
  CssBaseline,
  Link,
  Button
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { borders } from "@material-ui/system";

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

const uesStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "solid 0.5px",
    borderRadius: 10,
    borderColor: "#D3D3D3"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  }
}));

const Login = props => {
  const classes = uesStyles();
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
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <div className={classes.paper}>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h4" color="primary">
              {"Sign In"}
            </Typography>
          </Box>
          <Typography variant="body1" color="primary">
            Sign in with Your Email !!
          </Typography>
          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              onChange={e => setEmail(e.target.value)}
              autoFocus
            />
            <Box display="flex" flexDirection="row" justifyContent="flex-end">
              <Link variant="body1" color="primary">
                {"Forgot email?"}
              </Link>
            </Box>
            {/* <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="PassWord"
              type="password"
              onChange={e => setPassword(e.target.value)}
            /> */}
            <Box marginTop={4} color="#696969">
              <Typography color="inherit" variant="body2">
                {"You don't have an Account?"}
              </Typography>
              <Link color="primary" variant="body1">
                {"Create Account"}
              </Link>
            </Box>
            <Box
              display="flex"
              flex-direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Button variant="contained" color="primary">
                {"Next"}
              </Button>
            </Box>
          </form>
        </div>
      </Container>
      {/* <h4>{login ? "Login" : "Sign Up"} </h4> */}

      <div>
        {/* {" "} */}
        {/* {!login && (
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            //   type="text"
            placeholder="GILDO"
          />
        )} */}
        {/* <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="text"
          placeholder="GILDOGI@naver.com"
        /> */}
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
