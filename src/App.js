import React from "react";
import {
  HashRouter as Router,
  Redirect,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Box,
  Container,
  CssBaseline
} from "@material-ui/core";

import Account from "./pages/Account";
import Notes from "./components/Notes/Notes";

const useStyles = makeStyles(theme => ({
  root: { flexGrow: 1 }
}));
function App() {
  // let history = useHistory();
  const classes = useStyles();

  return (
    <Router basename={process.env.PUBLIC_URL + "/"}>
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
                <Box color="#696969">
                  <Typography color="inherit" variant="h3">
                    Daily
                  </Typography>
                  <Typography color="inherit" variant="h5">
                    - diary
                  </Typography>
                </Box>
                <hr />
                <Link to={"/notes"} variant="h5">
                  Notes
                </Link>
                <Link to={"/account"} variant="h5">
                  Account
                </Link>
              </Box>
            </Grid>
            <Grid item xs={7}>
              <Box marginLeft={4} marginTop={2}>
                <Switch>
                  <Route path="/account" render={() => <Account />} />
                  <Route path="/notes" render={() => <Notes />} />
                  <Route
                    exact
                    path="/"
                    render={() => <Redirect to="/notes" />}
                  />
                  <Router render={() => <p>404 not found.</p>} />
                </Switch>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Router>
  );
}

export default App;
