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
                  return (
                    <DateButton
                      month={state.month}
                      year={state.year}
                      date={DateCount++}
                      day={day}
                    ></DateButton>
                  );
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

const DateButton = ({ year, month, date, day }) => {
  const classes = useStyles();

  const state = useDateContext();
  const dispatch = useDateDispatch();

  const currentDate = {
    year,
    month,
    date
  };
  const handleClick = () => {
    console.log(state.select);
    console.log(currentDate);
    console.log(currentDate === state.select);
    dispatch({ type: "SELECT_DATE", date: date });
  };

  const selected = () => {
    if (
      currentDate.month === state.select.month &&
      currentDate.year === state.select.year &&
      currentDate.date === state.select.date
    ) {
      return true;
    }
    return false;
  };

  if (selected()) {
    return (
      <Button className={classes.dateButton} fullWidth disabled>
        {date}
      </Button>
    );
  }

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
