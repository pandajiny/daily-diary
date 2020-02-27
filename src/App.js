import React from "react";

import Calender from "./components/calender";
import Edit from "./components/edit";
import Note from "./components/note";

function App() {
  return (
    <div className="App">
      Daily-Diary Project<Calender></Calender>
      <Note month={2} date={26}></Note>
      <Edit></Edit>
    </div>
  );
}

export default App;
