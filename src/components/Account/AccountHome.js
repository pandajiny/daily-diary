import React from "react";
import { Redirect } from "react-router-dom";
import { Link, Container, Box } from "@material-ui/core";
import useStyles from "../../styles";

function AccountHome() {
  const classes = useStyles();
  return (
    <div className="account_home">
      {localStorage.getItem("loginState") === "true" ? (
        <Container maxWidth="sm">
          <Box className={classes.columnBox}>
            <Link>User Information</Link>
            <Link>Delete Account</Link>
            <Link>Log out</Link>
          </Box>
        </Container>
      ) : (
        <Redirect to="/account/login/email" />
      )}
    </div>
  );
}

export default AccountHome;
