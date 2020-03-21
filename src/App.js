import React from "react";

import { Grid, Box, Container, CssBaseline } from "@material-ui/core";
import useStyles from "./styles";

import Header from "./components/Header";
import Router from "./Router/Router";
import Navigater from "./components/Navigater";

function App() {
  const classes = useStyles();

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
