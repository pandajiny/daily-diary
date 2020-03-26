import React, { useState, useReducer } from "react";

import {
  Typography,
  Box,
  Button,
  Grid,
  ButtonGroup,
  Link,
  Fab
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
        <Box flexGrow="1">
          <Typography variant="body1">
            {MonthSheet[state.month] + ", " + state.year}
          </Typography>
        </Box>
        <Box>
          <Button size="small" onClick={() => dispatch({ type: "DECREASE" })}>
            {"<"}
          </Button>
          <Button size="small" onClick={() => dispatch({ type: "INCREASE" })}>
            {">"}
          </Button>
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
    </div>
  );
}
export default CalendarWidget;
