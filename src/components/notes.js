import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Note from "./note";

const GET_NOTES = gql`
  {
    getNotes {
      month
      date
      text
    }
  }
`;

const Notes = () => {
  const { loading, error, data } = useQuery(GET_NOTES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error Occured</p>;
  if (data) {
    console.log(`data is all ready`);
    console.log(data);
    return data.getNotes.map(currentNote => {
      console.log(`hello it's notes from Notes`);
      return (
        <Note month={currentNote.month} date={currentNote.date}>
          {currentNote.text}
        </Note>
      );
    });
  }
};

export default Notes;
