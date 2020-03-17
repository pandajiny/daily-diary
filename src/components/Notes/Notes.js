import React, { useState } from "react";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Box } from "@material-ui/core";

import Edit from "./Edit";
import Note from "./Note";

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
  root: { flexGrow: 1 }
}));

const Notes = () => {
  // Using material UI
  const classes = useStyles();
  // Using Graphql Apollo Queries
  const { loading, error, data } = useQuery(GET_NOTES);

  const [notesList, setNotesList] = useState([]);

  // merge two arrays from Client, Server
  const mergeArray = newDataArray => {
    console.log(`mergeArray is called, ${newDataArray[0]}`);
    let newNotesList = [];
    if (newDataArray) {
      newNotesList = notesList;
      newNotesList.concat(newDataArray);
    }
    setNotesList(newNotesList);
  };

  const handleAddNote = (year, month, date, text) => {
    const NewNote = {
      year: year,
      month: month,
      date: date,
      text: text
    };
    setNotesList(oldArray => [...oldArray, NewNote]);
    console.log(notesList);
  };
  //   {
  //     "year": 2020,
  //     "month": 3,
  //     "date": 15,
  //     "text": "Hi Haesun, It's from JINY."
  //   },

  if (data) {
    mergeArray(data.getNotes);
  }

  return (
    <div>
      <Box marginLeft={4} marginTop={2}>
        <Edit handleAddNote={handleAddNote} />
        {loading && <div>now on loading the notes...</div>}
        {error && <div>Error Occured.</div>}
        <Box marginTop={3}>
          {notesList.map((currentNote, index) => {
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
        </Box>
      </Box>
    </div>
  );
};

export default Notes;
