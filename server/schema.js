import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    hello: String!
    getNotes(email: String): [Note]
  }

  type Mutation {
    addNote(email: String, text: String, isImportant: Boolean): AddNoteResult
    signUp(name: String, email: String, password: String): SignUpResult
    logIn(email: String, password: String): LogInResult
  }

  type Note {
    _id: String
    time: Time
    content: NoteContent
    user: User
  }

  type Time {
    year: String
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
`;
