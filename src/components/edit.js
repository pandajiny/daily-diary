import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

import Calender from "./calender";

import MonthSheet from "./data/MonthSheet.json";
import {
  Container,
  TextField,
  Typography,
  Box,
  Avatar,
  Button
} from "@material-ui/core";

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

  const [addTodo] = useMutation(ADD_NOTE, {
    onCompleted: data => {
      window.location.reload(false);
    }
  });
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <Box
          display="flex"
          justifyContent="flex-end"
          marginRight={1}
          onClick={() => CalenderToggle()}
        >
          <Typography color="primary-dark" variant="body2">
            {MonthSheet[MonthIndex] + " " + DateIndex + ", " + YearIndex}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="row">
          <TextField
            id="text"
            placeholder="Add Note here.."
            multiline
            required
            fullWidth
            label="Add Note here.."
            onChange={e => setInput(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              addTodo({
                variables: {
                  year: YearIndex,
                  month: MonthIndex + 1,
                  date: DateIndex,
                  text: input.toString()
                }
              });
              console.log("clicked");
            }}
          >
            +
          </Button>
        </Box>
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
