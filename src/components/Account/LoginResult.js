import React, { useEffect, useState } from "react";
import { useLocation, useHistory, Redirect } from "react-router-dom";

import { useMutation } from "react-apollo";

import { LOGIN_MUTATION } from "../../gql";
import {
  Container,
  CssBaseline,
  Box,
  Typography,
  Avatar,
  Link
} from "@material-ui/core";

import useStyles from "../../styles";

const LoginResult = () => {
  const classes = useStyles();

  const location = useLocation();
  let history = useHistory();
  // const email,

  const [email, setEmail] = useState(
    location.state.email || localStorage.getItem("loggedInId")
  );

  const [password, setPassword] = useState(location.state.password || null);

  const [isLoading, setIsloading] = useState(true);

  const [loginMutation] = useMutation(LOGIN_MUTATION, {
    onCompleted: data => {
      console.log(`mutation onCompleted`);
      console.log(data);
      setIsloading(false);
      console.log("replace the location.state");
      if (data.logIn.passed) {
        localStorage.setItem("isLoggedIn", data.logIn.passed.toString());
        localStorage.setItem("loggedInId", data.logIn.user.email);
        history.replace({ state: {} });
      } else {
        console.log("login result : false");
        history.push("/account/login/email");
      }
    }
  });
  useEffect(() => {
    console.log(`use Effected Triggerd!`);
    console.log(email);
    console.log(password);
    loginMutation({ variables: { email, password } });
  }, [email, loginMutation, password]);

  if (isLoading) {
    return <div>Please Wait</div>;
  } else {
    return (
      <div className="account_login_result">
        <Container maxWidth="sm">
          <CssBaseline />
          <div className={classes.paper}>
            <Box className={classes.columnBox} alignItems="center">
              <Typography variant="h4" color="primary">
                Welcome!
              </Typography>
              <Typography variant="body1" color="primary">
                {"So pleasure to meet you !!"}
              </Typography>
              <Box className={classes.userProfile} marginTop={3}>
                <Avatar className={classes.smallAvatar}>
                  {email.slice(0, 1)}
                </Avatar>
                <Typography variant="body1">{email} </Typography>
              </Box>
            </Box>
            <Box width="100%" alignItems="left" paddingLeft={3}>
              <Box className={classes.columnBox} marginTop={4} color="#696969">
                <Link
                  onClick={() => history.push({ pathname: "/account" })}
                  color="primary"
                  variant="body1"
                >
                  {"Go back to Account!"}
                </Link>
                <Link
                  onClick={() => history.push({ pathname: "/" })}
                  color="primary"
                  variant="body1"
                >
                  {"Wanna go Home?"}
                </Link>
              </Box>
            </Box>
            <Box width="100%" marginTop={5} paddingRight={3} textAlign="right">
              <Link
                onClick={() => {
                  localStorage.setItem("isLoggedIn", "false");
                  localStorage.setItem("loggedInId", "");
                  history.push("/account/login/email");
                }}
                color="primary"
                variant="body1"
              >
                {"Log Out"}
              </Link>
            </Box>
          </div>
        </Container>
      </div>
    );
  }
};

export default LoginResult;
