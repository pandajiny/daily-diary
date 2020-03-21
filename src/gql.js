import gql from "graphql-tag";

export const LOGIN_MUTATION = gql`
  mutation login($email: String, $password: String) {
    login(email: $email, password: $password) {
      passed
    }
  }
`;

export const GET_NOTES = gql`
  {
    getNotes {
      year
      month
      date
      text
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
