import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    hello: String!
    getNotes: [Note]
  }

  type Mutation {
    addNote(
      name: String
      email: String
      year: Int
      month: Int
      date: Int
      text: String
    ): AddNoteResult
    signUp(name: String, email: String, password: String): SignUpResult
    logIn(email: String, password: String): LogInResult
  }

  type Note {
    _id: String
    user: User
    year: Int
    month: Int
    date: Int
    text: String
  }

  type User {
    name: String
    email: String
    password: String
  }

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
  }
`;
