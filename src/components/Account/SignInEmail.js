import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Avatar,
  Typography,
  Box,
  TextField,
  CssBaseline,
  Link,
  Button
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

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

const SignInEmail = props => {
  const classes = uesStyles();

  return (
    <div className="SignIn Root">
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
              onChange={e => props.handleEmailChange(e.target.value)}
              autoFocus
            />
            <Box display="flex" flexDirection="row" justifyContent="flex-end">
              <Link variant="body1" color="primary">
                {"Forgot email?"}
              </Link>
            </Box>

            <Box marginTop={4} color="#696969">
              <Typography color="inherit" variant="body2">
                {"You don't have an Account?"}
              </Typography>
              <Link
                onClick={() => props.handlePageChange("signup")}
                color="primary"
                variant="body1"
              >
                {"Create Account"}
              </Link>
            </Box>
            <Box
              display="flex"
              flex-direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Button
                onClick={() => props.handlePageChange("signinpass")}
                variant="contained"
                color="primary"
              >
                {"Next"}
              </Button>
            </Box>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default SignInEmail;
