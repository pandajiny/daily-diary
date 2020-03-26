import React from "react";
import { Grid, Container } from "@material-ui/core";
import useStyles from "../../styles";
import CalendarWidget from "./CalendarWidget";
import NoteDisplay from "./NoteDisplay";

import {
  DateContextProvider,
  NotesContextProvider,
  useNotesContext,
  useDateContext
} from "./CalendarContext";
import CalendarContainer from "./CalendarContainer";

function Calendar() {
  const classes = useStyles();

  return (
    <div className="calendar">
      <DateContextProvider>
        <NotesContextProvider>
          <CalendarContainer />
        </NotesContextProvider>
      </DateContextProvider>
    </div>
  );
}

export default Calendar;
