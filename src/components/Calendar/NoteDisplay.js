import React from "react";
import EditForm from "./EditForm";

import { useDateContext, useNotesContext } from "./CalendarContext";
import MonthSheet from "../../data/MonthSheet.json";
import useStyles from "../../styles";

import { Box, Typography, Button } from "@material-ui/core";

function NoteDisplay({ propsNotes }) {
  const classes = useStyles();

  const date = useDateContext();

  const notes = useNotesContext();

  const currentDateNotes = () => {
    return notes.filter(note => {
      if (note.time.year === date.year) {
        if (note.time.month === date.month) {
          if (note.time.date === date.select.date) {
            return true;
          }
        }
      } else {
        return false;
      }
    });
  };

  return (
    <div className="calendar-note-display">
      <EditForm />
      <Box className={classes.columnBox}>
        {currentDateNotes().map(note => {
          return <Note text={note.content.text} />;
        })}
      </Box>
    </div>
  );
}

function Note({ text }) {
  const classes = useStyles();
  return (
    <div className="calendar-note">
      <Box className={classes.rowBox}>
        <Typography variant="body2">{text}</Typography>
        <Button>Delete</Button>
      </Box>
    </div>
  );
}

export default NoteDisplay;
