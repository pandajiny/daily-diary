import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import MonthSheet from "../data/MonthSheet.json";

const useStyles = makeStyles(theme => ({}));

const Note = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box paddingBottom={0.5}>
        <Box color="#696969" marginLeft={0.5}>
          <Typography variant="caption">
            {MonthSheet[props.month]} {props.date}, {props.year}
          </Typography>
        </Box>
        <Typography variant="body1">{props.children}</Typography>
      </Box>
    </div>
  );
};

export default Note;
