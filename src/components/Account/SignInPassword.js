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
  },
  block: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  small: {
    width: theme.spacing(2),
    height: theme.spacing(2),
    margin: theme.spacing(1)
  }
}));

const SignInEmail = props => {
  const classes = uesStyles();

  return (
    <div className="SignIn Root">
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography variant="h4" color="primary">
            {props.tryAgain ? "Sorry :( " : "Welcome"}
          </Typography>
          <Typography variant="body1" color="primary">
            {props.tryAgain
              ? "Login Failed, please Try Again"
              : "Enter your Password !!"}
          </Typography>
          <Box
            className={classes.block}
            color="#696969"
            border="solid #D3D3D3"
            borderRadius={30}
            padding={0.3}
            paddingRight={1}
            marginTop={2}
          >
            <Avatar className={classes.small}>
              {props.currentEmail.toString().slice(0, 1)}
            </Avatar>
            <Typography variant="body1">{props.currentEmail} </Typography>
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
              onKeyDown={e => {
                if (e.key.toString() === "Enter") {
                  props.tryLogin();
                }
              }}
              onChange={e => props.handlePasswordChange(e.target.value)}
              autoFocus
            />

            <Box
              display="flex"
              flexDirection="column"
              marginTop={4}
              color="#696969"
            >
              <Link
                onClick={() => props.handlePageChange("signup")}
                color="primary"
                variant="body1"
              >
                {"Forgot Password?"}
              </Link>
              <Link
                onClick={() => props.handlePageChange("signinemail")}
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
                onClick={() => props.tryLogin()}
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
