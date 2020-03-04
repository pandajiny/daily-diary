import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const ADD_NOTE = gql`
  mutation AddNote($month: Int, $date: Int, $text: String) {
    addNote(month: $month, date: $date, text: $text) {
      month
      date
      text
    }
  }
`;

const Edit = () => {
  const [input, setInput] = useState("");
  const [addTodo, { data }] = useMutation(ADD_NOTE);
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo({
            variables: { month: 2, date: 27, text: input.toString() }
          });
          setInput("");
        }}
      >
        {/* <label>Month</label>
        <select>
          <option>Default</option>
        </select>
        <br />
        <label>Date</label>
        <select>
          <option>Default</option>
        </select>
        <label>Context : </label>
        <br /> */}
        <input value={input} onChange={e => setInput(e.target.value)} />
        <button type="submit">Add note</button>
        <button>Calender</button>
      </form>
    </div>
  );
};

export default Edit;
