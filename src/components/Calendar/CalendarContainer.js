import React, { useState } from "react";
import { Grid, Container } from "@material-ui/core";
import useStyles from "../../styles";
import CalendarWidget from "./CalendarWidget";
import NoteDisplay from "./NoteDisplay";

import { useNotesDispatch, useDateContext } from "./CalendarContext";
import { useMutation, useQuery } from "react-apollo";
import { GET_MONTH_NOTES } from "../../gql";

function CalendarContainer() {
  const classes = useStyles();
  const date = useDateContext();
  const notesDispatch = useNotesDispatch();

  const { loading, errorr, data } = useQuery(GET_MONTH_NOTES, {
    variables: {
      email: localStorage.getItem("loggedInId"),
      month: date.month,
      year: date.year
    }
  });

  const [loaded, setLoaded] = useState(false);

  if (data && !loaded) {
    notesDispatch({ type: "CREATE_NOTE", note: data.getMonthNotes });
    setLoaded(true);
    console.log(data);
  }

  return (
    <div className="calendar-container">
      <Container maxWidth="sm">
        <div className={classes.gridRoot}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <CalendarWidget />
            </Grid>
            <Grid item xs={6}>
              <NoteDisplay />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default CalendarContainer;
