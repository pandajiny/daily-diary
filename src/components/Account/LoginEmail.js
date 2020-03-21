import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";

import { validate } from "email-validator";

import useStyles from "../../styles";
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  Link,
  Button
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const LoginEmail = props => {
  const classes = useStyles();

  let history = useHistory();

  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log("handleSubmit");
    if (validate(email)) {
      console.log("validated");
      history.push({
        pathname: "/account/login/password",
        state: {
          email: email
        }
      });
    }
  };

  return (
    <div className="account_login_email">
      <Container maxWidth="sm">
        <CssBaseline />
        <div className={classes.paper}>
          <Box className={classes.rowBox}>
            <Avatar>
              <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h4" color="primary">
              {"Sign In"}
            </Typography>
          </Box>
          <Typography>{"Sign in with Your Email!"}</Typography>
          <form
            id="email-form"
            className={classes.form}
            onSubmit={e => e.preventDefault}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              onKeyDown={e => {
                if (e.key.toString() === "Enter") {
                  handleSubmit();
                }
              }}
              value={email}
              onChange={e => setEmail(e.target.value)}
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
                // onClick={() => handleSubmit()}
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
                onClick={() => handleSubmit()}
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

export default LoginEmail;
