import React from "react";
import { Box, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import useStyles from "../styles";

const Navigater = () => {
  const classes = useStyles();

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
        <Link to={"/notes"} variant="h5">
          Notes
        </Link>
        <Link to={"/account"} variant="h5">
          Account
        </Link>
      </Box>
    </div>
  );
};
export default Navigater;
