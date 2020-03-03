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
    addNote(month: Int, date: Int, text: String): Note
    hello(email: String): String
  }

  type Note {
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
    addNote: (_, { month, date, text }, __) => {
      console.log(`server, addNote is called with ${text}`);
      const newNote = [{ month, date, text }];
      let notesData = JSON.stringify(notes.concat(newNote));
      fs.writeFileSync("server/db/data.json", notesData);
      console.log("done!");
      return { month, date, text };
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);

// let today = [
//   {
//     month: 2,
//     date: 27
//   }
// ];
// let yesterday = [
//   {
//     month: 2,
//     date: 26
//   }
// ];

// let date = today.concat(yesterday);

// console.log(notes[0].month);

// let data = JSON.stringify(date);
// fs.writeFileSync("server/db/data.json", data);

// bookTrips: async (_, { launchIds }, { dataSources }) => {
//   const results = await dataSources.userAPI.bookTrips({ launchIds });
//   const launches = await dataSources.launchAPI.getLaunchesByIds({
//     launchIds,
//   });

//   return {
//     success: results && results.length === launchIds.length,
//     message:
//       results.length === launchIds.length
//         ? 'trips booked successfully'
//         : `the following launches couldn't be booked: ${launchIds.filter(
//             id => !results.includes(id),
//           )}`,
//     launches,
//   };
// },
