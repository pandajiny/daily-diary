import React from "react";
import useStyles from "../../styles";

import { Button, ButtonGroup } from "@material-ui/core";

import { useDateContext, useDateDispatch } from "./CalendarContext";
import DaySheet from "../../data/DaySheet.json";
import LastDateArray from "../../data/LastDaySheet.json";

function DateDisplay() {
  const WeekArray = [0, 1, 2, 3, 4, 5];

  const state = useDateContext();

  const getFirstDay = () => {
    const firstDateForMonth = new Date(state.year, state.month, 1);
    return firstDateForMonth.getDay();
  };

  return (
    <div className="Calendar-date-display">
      {WeekArray.map((week, weekNumber) => {
        let DateCount = 1 + week * 7;
        return (
          <div>
            <ButtonGroup fullWidth={true}>
              {DaySheet.map((day, dayIndex) => {
                if (
                  (dayIndex === getFirstDay() || DateCount > 1) &&
                  DateCount <= LastDateArray[state.month]
                ) {
                  return <DateButton date={DateCount++} day={day}></DateButton>;
                } else {
                  return <DateButton />;
                }
              })}
            </ButtonGroup>
          </div>
        );
      })}
    </div>
  );
}

const DateButton = ({ date, selectDate, day }) => {
  const classes = useStyles();

  const dispatch = useDateDispatch();

  const handleClick = () => {
    dispatch({ type: "SELECT_DATE", date: date });
  };

  if (date === undefined) {
    return (
      <Button className={classes.dateButton} fullWidth disabled>
        {""}
      </Button>
    );
  } else {
    if (day === "Sun") {
      return (
        <Button
          onClick={() => handleClick()}
          className={classes.dateButton}
          fullWidth
          color="secondary"
        >
          {date}
        </Button>
      );
    } else if (day === "Sat") {
      return (
        <Button
          onClick={() => handleClick()}
          className={classes.dateButton}
          fullWidth
          color="primary"
        >
          {date}
        </Button>
      );
    }
  }
  return (
    <Button
      className={classes.dateButton}
      fullWidth
      onClick={() => handleClick()}
    >
      {date}
    </Button>
  );
};

export default DateDisplay;
