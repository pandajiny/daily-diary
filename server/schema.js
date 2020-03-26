import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    hello: String!
    getMonthNotes(email: String, year: Int, month: Int): [Note]
  }

  type Mutation {
    addNote(email: String, text: String, isImportant: Boolean): AddNoteResult
    addSchedule(
      email: String
      text: String
      year: Int
      month: Int
      date: Int
    ): AddScheduleResult
    signUp(name: String, email: String, password: String): SignUpResult
    logIn(email: String, password: String): LogInResult
  }

  type Note {
    _id: String
    requestTime: Time
    time: Time
    content: NoteContent
    user: User
  }

  type Time {
    year: Int
    month: Int
    date: Int
    hour: Int
    minute: Int
  }

  type NoteContent {
    text: String
    isImportant: Boolean
    kind: String
  }

  type User {
    # Essential
    name: String
    email: String
    password: String
    phoneNumber: String
    # Optional
    haveProfileImage: Boolean
    School: String
    Job: String
  }

  # Function Result
  type AddNoteResult {
    passed: Boolean
    user: User
  }

  type SignUpResult {
    passed: Boolean
    user: User
  }

  type LogInResult {
    passed: Boolean
    user: User
    time: Time
  }

  type AddScheduleResult {
    passed: Boolean
    user: User
  }
`;
