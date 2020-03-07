import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Note from "./note";
import color from "@material-ui/core/colors/amber";

const GET_NOTES = gql`
  {
    getNotes {
      year
      month
      date
      text
    }
  }
`;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary
  }
}));

const Notes = () => {
  const { loading, error, data } = useQuery(GET_NOTES);

  const classes = useStyles();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error Occured</p>;
  if (data) {
    console.log(`data is all ready`);
    console.log(data);
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            {data.getNotes.map((currentNote, index) => {
              console.log(`hello it's notes from Notes`);
              return (
                <Note
                  key={index}
                  year={currentNote.year}
                  month={currentNote.month}
                  date={currentNote.date}
                >
                  {currentNote.text}
                </Note>
              );
            })}
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default Notes;
