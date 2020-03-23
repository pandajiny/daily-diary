import React from "react";
import { Box, Typography, Container, Link } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Header() {
  let history = useHistory();
  return (
    <div className="header">
      <Container maxWidth="md">
        <Box display="flex" justifyContent="flex-end">
          {localStorage.getItem("isLoggedIn") === "true" ? (
            <Box>
              <Typography>{localStorage.getItem("loggedInId")}</Typography>
              <Link
                onClick={() => {
                  localStorage.setItem(`isLoggedIn`, false);
                  localStorage.setItem("loggedInId", "");
                  window.location.reload();
                }}
              >
                Log Out
              </Link>
            </Box>
          ) : (
            <Box>
              <Link onClick={() => history.push("/account/login/email")}>
                Sign In?
              </Link>
              <Link>Sign Up?</Link>
            </Box>
          )}
        </Box>
      </Container>
    </div>
  );
}

export default Header;
