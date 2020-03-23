import React, { useState } from "react";

import { Typography, Box, Button, Grid } from "@material-ui/core";
import useStyles from "../../styles";

import MonthSheet from "../../data/MonthSheet.json";
import DaySheet from "../../data/DaySheet.json";
import LastDaySheet from "../../data/LastDaySheet.json";

function CalendarWidget() {
  const classes = useStyles();
  const Today = new Date();

  const [monthIndex, setMonthIndex] = useState(Today.getMonth());
  const [dateIndex, setDateIndex] = useState(Today.getDate());

  let DateForDisp = 0;

  const getFirstDate = () => {
    const firstDateForMonth = new Date(Today.getFullYear(), monthIndex, 1);
    return firstDateForMonth;
  };

  const DateDisplay = (WeekNumber, DayIndex) => {
    /// Init with First Date for each Month
    if (WeekNumber === 0) {
      if (DayIndex === getFirstDate().getDay()) {
        DateForDisp = 1;
      }
    }
    // Counting Date
    if (DateForDisp > 0 && DateForDisp <= LastDaySheet[monthIndex]) {
      console.log(`last Day : ${LastDaySheet[monthIndex]}`);
      return DateForDisp++;
    }
  };

  const WeekArray = [0, 1, 2, 3, 4, 5];

  const handleIncreaseMonth = () => {
    setMonthIndex(prev => prev + 1);
  };
  const handleDecreaseMonth = () => {
    setMonthIndex(prev => prev - 1);
  };

  return (
    <div>
      <Box className={classes.rowBox} alignItems="center">
        <Typography>{MonthSheet[monthIndex] + " " + dateIndex}</Typography>
        <Box>
          <Button onClick={() => handleDecreaseMonth()}>{"<"}</Button>
          <Button onClick={() => handleIncreaseMonth()}>{">"}</Button>
        </Box>
      </Box>
      <Grid container xs="auto">
        {DaySheet.map(day => (
          <Grid item xs>
            <Box textAlign="center">
              <Typography variant="body2">{day}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      {WeekArray.map((week, WeekNumber) => {
        return (
          <Grid container xs="auto">
            {DaySheet.map((day, DayIndex) => {
              return (
                <Grid item xs>
                  <Box textAlign="center">
                    <Typography variant="body2">
                      {DateDisplay(WeekNumber, DayIndex)}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        );
      })}
      {/* {getFirstDate()} */}
    </div>
  );
}

export default CalendarWidget;
