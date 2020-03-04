import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const MonthSheet = [
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

const LastDaySheet = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const DaySheet = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// Getting Date Method
let DateMethod = new Date();
// console.log(`hello it's from calender`);

// Material UI Ops
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));
// console.log(`AfterTrim ${Day_FirstDate}`);
const Calender = () => {
  // Meterial UI
  const classes = useStyles();

  // Get Today Information
  let today = {
    year: parseInt(DateMethod.getFullYear()),
    month: DateMethod.getMonth(),
    date: parseInt(DateMethod.getDate())
  };
  // console.log(`today.month : ${today.month}`);

  const [MonthIndex, setMonthIndex] = useState(today.month);
  const [YearIndex, setYearIndex] = useState(2020);

  let currentDate = 0;

  const HandleMonthIndex = delta => {
    // console.log(`current Month Index : ${MonthIndex}`);
    setMonthIndex(MonthIndex => MonthIndex + delta);
  };

  const HandleClickPrevButton = () => {
    if (MonthIndex === 0) {
      setMonthIndex(month => 11);
      setYearIndex(year => year - 1);
    } else {
      HandleMonthIndex(-1);
    }
  };

  const HandleClickNextButton = () => {
    if (MonthIndex === 11) {
      setMonthIndex(month => 0);
      setYearIndex(year => year + 1);
    } else {
      HandleMonthIndex(1);
    }
  };

  // Counting Date for display
  const countDate = () => {
    currentDate++;
    // console.log(`lastDay of this month : ${LastDaySheet[MonthIndex]}`);
    if (currentDate > LastDaySheet[MonthIndex]) {
      if (MonthIndex === 1 && !(YearIndex % 4) && currentDate === 29) {
        // console.log("윤년");
        return 29;
      }
      return "";
    }
    return currentDate;
  };

  const getFisrtDay = (year, month) => {
    return new Date(year, month, 1).toString().substring(0, 3);
  };
  // console.log(getFisrtDay(today.year, today.month));

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        {/* Calender Widget Component Below */}
        <Grid item xs={7}>
          <h1>Calender Widget</h1>
        </Grid>
        <Grid item xs={5}></Grid>
        {/* Current Month Index and Year */}
        <Grid item xs={5}>
          <p>
            {MonthSheet[MonthIndex]},{YearIndex}
          </p>
        </Grid>
        <Grid item xs={1}>
          <Button onClick={HandleClickPrevButton}>Prev</Button>
        </Grid>
        <Grid item xs={1}>
          <Button onClick={HandleClickNextButton}>Next</Button>
        </Grid>
        <Grid item xs={5}></Grid>

        {/* Display Day List */}
        {DaySheet.map((day, index) => (
          <Grid item xs={1} key={day}>
            {index < 5 ? (
              <Button>{day}</Button>
            ) : index === 5 ? (
              <Button color="primary">{day}</Button>
            ) : (
              <Button color="secondary">{day}</Button>
            )}
          </Grid>
        ))}
        <Grid item xs={5}></Grid>
        {/* First Week */}
        {DaySheet.map((date, index) => {
          // console.log(`FIrst Day${getFisrtDay(2020, MonthIndex)}`);
          // console.log(`Month Index : ${MonthIndex}`);
          return (
            <Grid item xs={1} key={index}>
              <Button>
                {DaySheet[index] === getFisrtDay(2020, MonthIndex)
                  ? countDate()
                  : currentDate !== 0
                  ? countDate()
                  : ""}
              </Button>
            </Grid>
          );
        })}
        <Grid item xs={5}></Grid>
        {DaySheet.map((date, index) => (
          <Grid item xs={1} key={index}>
            <Button>{countDate()}</Button>
          </Grid>
        ))}
        <Grid item xs={5}></Grid>
        {DaySheet.map((date, index) => (
          <Grid item xs={1} key={index}>
            <Button>{countDate()}</Button>
          </Grid>
        ))}
        <Grid item xs={5}></Grid>
        {DaySheet.map((date, index) => (
          <Grid item xs={1} key={index}>
            <Button>{countDate()}</Button>
          </Grid>
        ))}
        <Grid item xs={5}></Grid>
        {DaySheet.map((date, index) => (
          <Grid item xs={1} key={index}>
            <Button>{countDate()}</Button>
          </Grid>
        ))}
        <Grid item xs={5}></Grid>
        {DaySheet.map((date, index) => (
          <Grid item xs={1} key={index}>
            <Button>{countDate()}</Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Calender;
