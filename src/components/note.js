import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/box";
import Typography from "@material-ui/core/Typography";
import MonthSheet from "./data/MonthSheet.json";

const useStyles = makeStyles(theme => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2)
    }
  },
  Box: {
    // background: "#CAA7D9",
    borderRadius: 5,
    color: "#422A59",
    marginLeft: 5
  }
}));

const Note = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box className={classes.Box} component="div">
        <Typography variant="subtitle2">
          {MonthSheet[props.month]} {props.date}, {props.year}
        </Typography>
        <p>{props.children} </p>
      </Box>
    </div>
  );
};

export default Note;
