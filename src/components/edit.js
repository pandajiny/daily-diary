import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

import Calender from "./calender";

import MonthSheet from "./data/MonthSheet.json";
import { Container } from "@material-ui/core";

const ADD_NOTE = gql`
  mutation AddNote($year: Int, $month: Int, $date: Int, $text: String) {
    addNote(year: $year, month: $month, date: $date, text: $text) {
      year
      month
      date
      text
    }
  }
`;

let DateMethod = new Date();

const Edit = () => {
  // Get Today Information
  let today = {
    year: DateMethod.getFullYear(),
    month: DateMethod.getMonth(),
    date: DateMethod.getDate()
  };

  const [input, setInput] = useState("");

  const [YearIndex, setYearIndex] = useState(today.year);
  const [MonthIndex, setMonthIndex] = useState(today.month);
  const [DateIndex, setDateIndex] = useState(today.date);

  const [CalenderDisplay, setCalenderDisplay] = useState(false);

  const CalenderToggle = () => {
    // console.log(`CalenderToggle Clicked`);
    setCalenderDisplay(prevState => !prevState);
  };

  const HandleCalenderSelect = (year, month, date) => {
    console.log(`calender select fx clicked${year},${month},${date}`);
    setYearIndex(YearIndex => year);
    setMonthIndex(MonthIndex => month);
    setDateIndex(DateIndex => date);
  };

  const [addTodo, { data }] = useMutation(ADD_NOTE);
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo({
            variables: {
              year: YearIndex,
              month: MonthIndex + 1,
              date: DateIndex,
              text: input.toString()
            }
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
        <label>{MonthSheet[MonthIndex]}</label>
        <label>{DateIndex} </label>
        <label>, {YearIndex}</label>
        <br />
        <input value={input} onChange={e => setInput(e.target.value)} />
        <button type="submit">Add note</button>
        <button onClick={() => CalenderToggle()}>Calender</button>
        {CalenderDisplay && (
          <div>
            <Calender HandleSelect={HandleCalenderSelect} />
          </div>
        )}
      </form>
    </div>
  );
};

export default Edit;
