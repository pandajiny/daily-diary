import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { Link, Container, Box } from "@material-ui/core";
import useStyles from "../../styles";

function AccountHome() {
  const classes = useStyles();
  const history = useHistory();
  console.log(`"login State : ${localStorage.getItem("isLoggedIn")} "`);
  console.log(localStorage.getItem("isLoggedIn"));
  return (
    <div className="account_home">
      {localStorage.getItem("isLoggedIn") === "true" ? (
        <Container maxWidth="sm">
          <Box className={classes.columnBox}>
            <Link>User Information</Link>
            <Link>Delete Account</Link>
            <Link onClick={() => history.push("/account/login/email")}>
              Log out
            </Link>
          </Box>
        </Container>
      ) : (
        <Redirect to="/account/login/email" />
      )}
    </div>
  );
}

export default AccountHome;
