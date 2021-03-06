import React, { useState } from "react";

// Import Graphql Package
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_MONTH_NOTES, ADD_NOTE } from "../../gql";

// Import Material UI
import { Box } from "@material-ui/core";

// Import Components
import Edit from "./Edit";
import Note from "./Note";

const Notes = () => {
  // Using Graphql Apollo Queries
  const { loading, error, data } = useQuery(GET_MONTH_NOTES);
  const [addNote] = useMutation(ADD_NOTE, {
    onCompoleted: data => {
      console.log(data);
    }
  });

  // Using React-hooks State
  const [notesList, setNotesList] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (data && !dataLoaded) {
    // console.log(`data loaded: ${data.getNotes[0].text}`);
    setDataLoaded(true);
    setNotesList(prevArray => prevArray.concat(data.getNotes));
  }

  const handleAddNote = (year, month, date, text) => {
    const NewNote = {
      year: year,
      month: month,
      date: date,
      text: text
    };
    setNotesList(oldArray => [...oldArray, NewNote]);
    addNote({ variables: { ...NewNote } });
    console.log(notesList);
  };

  return (
    <div>
      <Box marginLeft={4} marginTop={2}>
        <Edit handleAddNote={handleAddNote} />
        {loading && <div>now on loading the notes...</div>}
        {error && <div>Error Occured.</div>}
        {data && (
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
        )}
      </Box>
    </div>
  );
};

export default Notes;
