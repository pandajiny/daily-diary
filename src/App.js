import React from "react";

import { Grid, Box, Container, CssBaseline } from "@material-ui/core";
import useStyles from "./styles";

import Header from "./components/Header";
import Router from "./Router/Router";
import Navigater from "./components/Navigater";
import { Redirect, useLocation } from "react-router-dom";

function App() {
  const classes = useStyles();
  const location = useLocation();

  const getLoginState = () => {
    return localStorage.getItem("isLoggedIn");
  };

  if (
    location.pathname !== "/account/login/email" &&
    location.pathname !== "/account/login/password" &&
    location.pathname !== "/account/login/result" &&
    getLoginState() === "false"
  ) {
    console.log(location.pathname);
    return <Redirect to="/account/login/email" />;
  } else {
    console.log(`not trigged`);
    console.log(location.pathname === "/account/login/email");
    console.log(Boolean("false"));
    console.log(Boolean(getLoginState().toString()));
  }

  return (
    <div className="app">
      <Container maxWidth="lg">
        <CssBaseline />
        <Header />
        <div className={classes.gridRoot}>
          <Grid container>
            <Grid item xs={3}>
              <Navigater />
            </Grid>
            <Grid item xs={7}>
              <Box marginLeft={4} marginTop={2}>
                <Router />
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default App;
