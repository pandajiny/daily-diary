import React from "react";
import { Grid, Container } from "@material-ui/core";
import useStyles from "../../styles";
import CalendarWidget from "./CalendarWidget";
import NoteDisplay from "./NoteDisplay";

function Calendar() {
  const classes = useStyles();
  return (
    <div className="calendar">
      <Container maxWidth="sm">
        <div className={classes.gridRoot}>
          <Grid container>
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

export default Calendar;
