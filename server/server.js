import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import fs from "fs";
import notes from "./db/data.json";
import login from "./db/login.json";

const PORT = 4000;

const app = express();

const typeDefs = gql`
  type Query {
    hello: String!
    getNotes: [Note]
  }

  type Mutation {
    addNote(year: Int, month: Int, date: Int, text: String): Note
    hello(email: String): String
    signup(email: String, password: String, name: String): signupResult
    login(email: String, password: String): loginResult
  }

  type Note {
    year: Int
    month: Int
    date: Int
    text: String
  }

  type signupResult {
    passed: Boolean
  }

  type loginResult {
    passed: Boolean
  }
`;

const resolvers = {
  Query: {
    hello: () => "World",
    getNotes: () => {
      console.log(`server, getNotes is Called`);
      return notes;
    }
  },
  Mutation: {
    addNote: (_, { year, month, date, text }, __) => {
      console.log(`server, addNote is called with ${text}`);
      const newNote = [{ year, month, date, text }];
      let notesData = JSON.stringify(notes.concat(newNote));
      fs.writeFileSync("server/db/data.json", notesData);
      console.log("done!");
      return { year, month, date, text };
    },
    signup: (_, { email, password, name }) => {
      console.log(`signup!${email + password}`);
      const token = email.concat(" ", password, " ", name);
      const UserInformation = JSON.stringify({ email, password, name });
      fs.writeFileSync("server/db/login.json", UserInformation);
      return { passed: true };
    },
    login: (_, { email, password }) => {
      console.log(`login! ${email}, ${password}`);
      if (email === login.email && password === login.password)
        return { passed: true };
      else return { passed: false };
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
