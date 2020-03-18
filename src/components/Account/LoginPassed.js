import React from "react";
import {
  Box,
  Typography,
  Paper,
  CssBaseline,
  Container
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import CheckIcon from "@material-ui/icons/Check";
import { green, pink, blue } from "@material-ui/core/colors";
import { useHistory } from "react-router-dom";

const useStyle = makeStyles(theme => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(3),
    border: "solid 0.8px",
    borderColor: theme.palette.grey,
    borderRadius: 40
  },
  loginResult: {
    display: "flex",
    alignItems: "baaseline",
    padding: theme.spacing(3),
    marginBottom: theme.spacing(2)
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: theme.spacing(1.5),
    paddingTop: theme.spacing(0.7),
    paddingBottom: theme.spacing(0.7),
    border: "solid 1.3px",
    borderRadius: 30,
    borderColor: "#696969"
  },
  resultAvatar: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
    width: theme.spacing(4),
    height: theme.spacing(4)
  },
  profileAvatar: {
    marginRight: theme.spacing(1),
    width: theme.spacing(3),
    height: theme.spacing(3)
  }
}));

const LoginPassed = props => {
  let history = useHistory();
  const classes = useStyle();
  return (
    <Container maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper} width="100%">
        <Box className={classes.loginResult}>
          <Box marginRight={0.5} color="#000000">
            <Avatar className={classes.resultAvatar}>
              <CheckIcon color="inherit" fontSize="large" />
            </Avatar>
          </Box>
          <Box>
            <Typography variant="h5" color="primary">
              Login Passed !!
            </Typography>
          </Box>
        </Box>
        <Box className={classes.profile} color="#696969">
          <Avatar className={classes.profileAvatar}></Avatar>
          <Typography variant="body1" color="inherit">
            {props.email}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" marginTop={3}>
          <Box display="flex" justifyContent="flex-end">
            <Typography variant="body2">{"Go Back to"}</Typography>
            <Typography color="primary" onClick={() => history.push("/")}>
              &nbsp;Home
            </Typography>
          </Box>
          <Box display="flex" justifyContent="flex-end">
            <Typography variant="body2">{"or You wanna"}</Typography>
            <Typography
              color="primary"
              onClick={() => {
                props.handleLogout();
                props.handlePageChange("signinemail");
                console.log(`clicked`);
              }}
            >
              &nbsp;Log Out?
            </Typography>
          </Box>
        </Box>
      </div>
    </Container>
  );
};

export default LoginPassed;
