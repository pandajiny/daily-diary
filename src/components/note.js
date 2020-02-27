import React from "react";

const Note = props => {
  const month = [
    "Error",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  return (
    <div>
      <h2>
        {month[props.month]} {props.date}
      </h2>
      <p>Today, I made a project folder</p>
    </div>
  );
};

export default Note;
