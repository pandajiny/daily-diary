import React from "react";
import { Box, Typography, Container } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <Container maxWidth="md">
        <Box display="flex" justifyContent="flex-end">
          {localStorage.getItem("loginState") === "true" ? (
            <Box>
              <Typography>{"userData@gmail.com / logout"} </Typography>
            </Box>
          ) : (
            <Box>Sign Up? / Sign In?</Box>
          )}
        </Box>
      </Container>
    </div>
  );
}

export default Header;
