import React from "react";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
// import "typeface-roboto";

import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Box,
  Container,
  Link,
  CssBaseline
} from "@material-ui/core";

import Account from "./pages/Account";
import Notes from "./components/Notes/Notes";

const useStyles = makeStyles(theme => ({
  root: { flexGrow: 1 }
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <p>public URL v4.{process.env.PUBLIC_URL}</p>
      <Container maxWidth="lg">
        <CssBaseline />
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={3}>
              <Box
                minHeight="500px"
                display="flex"
                flexDirection="column"
                alignItems="right"
                textAlign="right"
                width="100%"
                paddingRight={2}
              >
                <Box flex>
                  <Typography color="#696969" variant="h3">
                    Daily
                  </Typography>
                  <Typography color="#696969" variant="h5">
                    - diary
                  </Typography>
                </Box>
                <hr />
                <Link href={process.env.PUBLIC_URL + "/notes"} variant="h5">
                  Notes
                </Link>
                <Link href={process.env.PUBLIC_URL + "/account"} variant="h5">
                  Account
                </Link>
              </Box>
            </Grid>
            <Grid item xs={7}>
              <Box marginLeft={4} marginTop={2}>
                <Switch>
                  <Route
                    path={process.env.PUBLIC_URL + "/account"}
                    render={() => <Account />}
                  />
                  <Route path={"/notes"} render={() => <Notes />} />
                  <Route
                    exact
                    path="/"
                    render={() => <Redirect to="/notes" />}
                  />
                  <Route render={() => <p>404 not found.</p>} />
                </Switch>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </BrowserRouter>
  );
}

export default App;
