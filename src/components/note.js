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
      <p>
        {month[props.month]} {props.date}, {props.year}
      </p>
      <p>{props.children} </p>
    </div>
  );
};

export default Note;
