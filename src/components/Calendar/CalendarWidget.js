import React, { useState, useReducer } from "react";

import {
  Typography,
  Box,
  Button,
  Grid,
  ButtonGroup,
  Link
} from "@material-ui/core";
import useStyles from "../../styles";

import { useDateContext, useDateDispatch } from "./CalendarContext";
import DateDisplay from "./DateDisplay";
import MonthSheet from "../../data/MonthSheet.json";
import DaySheet from "../../data/DaySheet.json";
import LastDaySheet from "../../data/LastDaySheet.json";

function CalendarWidget() {
  const classes = useStyles();
  const Today = new Date();

  const state = useDateContext();
  const dispatch = useDateDispatch();

  return (
    <div>
      <Box className={classes.rowBox} alignItems="center">
        <Typography>
          {MonthSheet[state.month] +
            " " +
            (state.year === Today.getFullYear() ? "" : state.year)}
        </Typography>
        <Box>
          <Button onClick={() => dispatch({ type: "DECREASE" })}>{"<"}</Button>
          <Button onClick={() => dispatch({ type: "INCREASE" })}>{">"}</Button>
        </Box>
      </Box>
      <Grid container>
        {DaySheet.map((day, index) => (
          <Grid item xs>
            <Box textAlign="center" key={index}>
              <Typography variant="body2">{day}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <DateDisplay />

      <p>{state.year}</p>

      <p>{state.month}</p>

      <p>{state.date}</p>
    </div>
  );
}
export default CalendarWidget;
