import React, { useState } from "react";

import useStyles from "../../styles";
import {
  Container,
  Box,
  Typography,
  Avatar,
  TextField,
  Link,
  Button
} from "@material-ui/core";
import { useHistory, useLocation, Redirect } from "react-router-dom";

const LoginPassword = () => {
  const classes = useStyles();
  let history = useHistory();
  const location = useLocation();

  const [password, setPassword] = useState("");

  if (location && !location.state) {
    // console.log("go home");
    return <Redirect to="/account/login/email" />;
  }

  const { email } = location.state;
  const handleSubmit = () => {
    history.push({
      pathname: "/account/login/result",
      state: {
        email: email,
        password: password
      }
    });
  };

  return (
    <div className="account_login_password">
      <Container maxWidth="sm">
        <div className={classes.paper}>
          <Box className={classes.columnBox} alignItems="center">
            <Typography variant="h4" color="primary">
              {"Welcome"}
            </Typography>
            <Typography variant="body1" color="primary">
              {"Enter your Password !!"}
            </Typography>
            <Box className={classes.userProfile} marginTop={3}>
              <Avatar className={classes.smallAvatar}>
                {location.state.email.slice(0, 1)}
              </Avatar>
              <Typography variant="body1">{location.state.email} </Typography>
            </Box>
          </Box>
          <form
            className={classes.form}
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="PassWord"
              type="password"
              value={password}
              // onKeyDown={e => {
              //   if (e.key.toString() === "Enter") {
              //     props.tryLogin();
              //   }
              // }}
              onChange={e => setPassword(e.target.value)}
              autoFocus
            />

            <Box className={classes.columnBox} marginTop={4} color="#696969">
              <Link
                //   onClick={() => props.handlePageChange("signup")}
                color="primary"
                variant="body1"
              >
                {"Forgot Password?"}
              </Link>
              <Link
                //   onClick={() => props.handlePageChange("signinemail")}
                color="primary"
                variant="body1"
              >
                {"Wrong Email?"}
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

export default LoginPassword;
