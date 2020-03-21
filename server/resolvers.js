import { db } from "./server";

export const resolvers = {
  Query: {
    hello: () => "World",
    getNotes: async () => {
      const value = await db
        .collection("notes")
        .find()
        .toArray()
        .then(result => result);
      return value;
    }
  },
  Mutation: {
    addNote: async (_, { user, year, month, date, text }, ___) => {
      console.log(`server, addNote is called with ${text}`);
      const newNote = { year, month, date, text };
      const value = await db
        .collection("notes")
        .insertOne(newNote)
        .then(result => result);
      console.log(value);
    },
    signUp: async (_, { name, email, password }, ___) => {
      console.log(`server, signUp is called with ${email}`);
      const newUser = { name, email, password };
      const result = await db
        .collection("users")
        .insertOne(newUser)
        .then(result => result);
      const userResult = {
        name: result.ops[0].name,
        email: result.ops[0].email
      };
      return {
        passed: result.result.ok === 1,
        user: userResult
      };
    }
  }
};
