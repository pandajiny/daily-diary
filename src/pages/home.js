import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Box,
  Container,
  Link,
  CssBaseline
} from "@material-ui/core";

import Edit from "../components/edit";
import Notes from "../components/notes";

const useStyles = makeStyles(theme => ({
  root: { flexGrow: 1 }
}));

const Home = () => {
  const classes = useStyles();
  return (
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
              <Link href="/account" variant="h5">
                Account
              </Link>
            </Box>
          </Grid>
          <Grid item xs={7}>
            <Box marginLeft={4} marginTop={2}>
              <Edit />
              <Notes />
            </Box>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Home;
