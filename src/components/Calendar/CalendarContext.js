import React, {
  createContext,
  Dispatch,
  useReducer,
  useContext,
  Children
} from "react";

// State Context Def
const DateStateContext = createContext(undefined);

// Dispatch Context Def
const DateDispatchContext = createContext(undefined);

// Reducer Def
function DateReducer(state, action) {
  // reducer
  switch (action.type) {
    case "INCREASE":
      if (state.month >= 11) {
        return { year: state.year + 1, month: 0 };
      } else {
        return { ...state, month: state.month + 1 };
      }
    case "DECREASE":
      if (state.month <= 0) {
        return { ...state, year: state.year - 1, month: 11 };
      } else {
        return { ...state, month: state.month - 1 };
      }
    case "SELECT_DATE":
      return {
        ...state,
        select: { year: state.year, month: state.month, date: action.date }
      };
    default:
      throw new Error("unhandled action");
  }
}

// Context Provider Def
export function DateContextProvider({ children }) {
  const Today = new Date();

  // initialize calendar date with Today's information
  const initialDate = {
    year: Today.getFullYear(),
    month: Today.getMonth(),
    select: {
      year: Today.getFullYear(),
      month: Today.getMonth(),
      date: Today.getDate()
    }
  };
  const [date, dispatch] = useReducer(DateReducer, initialDate);
  return (
    <DateDispatchContext.Provider value={dispatch}>
      <DateStateContext.Provider value={date}>
        {children}
      </DateStateContext.Provider>
    </DateDispatchContext.Provider>
  );
}

export function useDateContext() {
  const state = useContext(DateStateContext);
  if (!state) throw new Error("DateProvider not found");
  return state;
}

export function useDateDispatch() {
  const dispatch = useContext(DateDispatchContext);
  if (!dispatch) throw new Error("DateProvider not found");
  return dispatch;
}

// Notes State Context

const NotesDispatchContext = createContext(undefined);
const NotesStateContext = createContext(undefined);

const NotesReducer = (state, action) => {
  switch (action.type) {
    case "GET_NOTES":
      return state;
    case "CREATE_NOTE":
      console.log(state);
      return state.concat(action.note);
    default:
      throw new Error("unhandled action type");
  }
};

export function NotesContextProvider({ children }) {
  // Note has, date information, who write from, content
  const initialNotes = [];

  const [notes, dispatch] = useReducer(NotesReducer, initialNotes);
  return (
    <NotesDispatchContext.Provider value={dispatch}>
      <NotesStateContext.Provider value={notes}>
        {children}
      </NotesStateContext.Provider>
    </NotesDispatchContext.Provider>
  );
}

export function useNotesContext() {
  const state = useContext(NotesStateContext);
  if (!state) throw new Error("Notes Provider not found");
  return state;
}

export function useNotesDispatch() {
  const dispatch = useContext(NotesDispatchContext);
  if (!dispatch) throw new Error("Notes Provider not found");
  return dispatch;
}
