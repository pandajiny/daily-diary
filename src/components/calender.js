import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const DaySheet = [
  { day: "Mo", num: 1 },
  { day: "Tu", num: 2 },
  { day: "We", num: 3 },
  { day: "Th", num: 4 },
  { day: "Fr", num: 5 },
  { day: "Sa", num: 6 },
  { day: "Su", num: 7 }
];

const Calender = () => {
  const classes = useStyles();
  let date = new Date();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={7}>
          <h1>Calender Widget</h1>
        </Grid>
        <Grid item xs={5}></Grid>
        <Grid item xs={7}>
          <p>Month and Year</p>
        </Grid>

        <Grid item xs={5}></Grid>
        {DaySheet.map(day => (
          <Grid item xs={1}>
            {day.day}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Calender;
