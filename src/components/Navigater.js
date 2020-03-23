import React from "react";
import { Box, Typography, Link } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import useStyles from "../styles";

const Navigater = () => {
  const classes = useStyles();

  const history = useHistory();

  return (
    <div className="Navigater">
      <Box
        className={classes.columnBox}
        alignItems="right"
        flexDirection="row"
        textAlign="right"
        paddingRight={2}
      >
        <Box color="#696969">
          <Typography color="inherit" variant="h3">
            Daily
          </Typography>
          <Typography color="inherit" variant="h5">
            - diary
          </Typography>
        </Box>
        <hr />
        <Link
          onClick={() => {
            history.push("/account");
          }}
          variant="subtitle1"
        >
          Account
        </Link>
        <Link
          onClick={() => {
            history.push("/calendar");
          }}
          variant="subtitle1"
        >
          Calendar
        </Link>
        <Link
          onClick={() => {
            history.push("/notes");
          }}
          variant="subtitle1"
        >
          Notes
        </Link>
      </Box>
    </div>
  );
};
export default Navigater;
