import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import fs from "fs";
import notes from "./db/data.json";

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
  }

  type Note {
    year: Int
    month: Int
    date: Int
    text: String
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
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
