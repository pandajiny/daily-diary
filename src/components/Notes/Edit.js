import React, { useState, useRef, useEffect } from "react";

import Calender from "../calender";

import MonthSheet from "../data/MonthSheet.json";
import {
  // Container,
  TextField,
  Typography,
  Box,
  // Avatar,
  Button
} from "@material-ui/core";

let DateMethod = new Date();

const Edit = props => {
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

  const handleSubmit = e => {
    e.preventDefault();
    props.handleAddNote(YearIndex, MonthIndex + 1, DateIndex, input.toString());
    setInput("");
    console.log("clicked");
    document.getElementById("edit-form").reset();
  };

  return (
    <div>
      <form id="edit-form" onSubmit={e => handleSubmit(e)}>
        <Box
          display="flex"
          justifyContent="flex-end"
          marginRight={1}
          onClick={() => CalenderToggle()}
          color="primary-dark"
        >
          <Typography color="inherit" variant="body2">
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
            onChange={e => {
              setInput(e.target.value);
            }}
            onKeyPress={e => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
          />
          <Button variant="contained" color="primary" type="submit">
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
