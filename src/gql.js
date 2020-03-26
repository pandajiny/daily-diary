import gql from "graphql-tag";

export const LOGIN_MUTATION = gql`
  mutation login($email: String, $password: String) {
    logIn(email: $email, password: $password) {
      passed
      user {
        email
      }
    }
  }
`;

export const GET_MONTH_NOTES = gql`
  query GetMonthNotes($email: String, $year: Int, $month: Int) {
    getMonthNotes(email: $email, year: $year, month: $month) {
      time {
        year
        month
        date
      }
      content {
        text
      }
      user {
        email
      }
    }
  }
`;
export const ADD_NOTE = gql`
  mutation AddNote($year: Int, $month: Int, $date: Int, $text: String) {
    addNote(year: $year, month: $month, date: $date, text: $text) {
      year
      month
      date
      text
    }
  }
`;

export const ADD_SCHEDULE = gql`
  mutation AddSchedule(
    $text: String
    $email: String
    $year: Int
    $month: Int
    $date: Int
  ) {
    addSchedule(
      text: $text
      email: $email
      year: $year
      month: $month
      date: $date
    ) {
      passed
      user {
        email
      }
    }
  }
`;
