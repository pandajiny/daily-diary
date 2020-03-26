import React, { useState } from "react";

import { TextField, Button } from "@material-ui/core";

import {
  useNotesContext,
  useNotesDispatch,
  useDateContext
} from "./CalendarContext";

import { ADD_SCHEDULE } from "../../gql";
import { useMutation } from "react-apollo";

function EditForm() {
  const [input, setInput] = useState("");
  const dispatch = useNotesDispatch();
  const date = useDateContext();

  const [addSchedule] = useMutation(ADD_SCHEDULE, {
    onCompleted: data => {
      console.log(data);
    }
  });

  const handleSubmit = () => {
    const newNote = {
      time: {
        ...date.select
      },
      content: {
        text: input,
        isImportant: false,
        kind: "note"
      },
      user: {
        email: localStorage.getItem("loggedInId")
      }
    };
    addSchedule({
      variables: {
        text: newNote.content.text,
        email: newNote.user.email,
        year: newNote.time.year,
        month: newNote.time.month,
        date: newNote.time.date
      }
    });

    dispatch({ type: "CREATE_NOTE", note: newNote });
    setInput("");
  };
  return (
    <div className="calendar-edit-form">
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <TextField value={input} onChange={e => setInput(e.target.value)} />
        <Button type="submit">+</Button>
      </form>
    </div>
  );
}

export default EditForm;
