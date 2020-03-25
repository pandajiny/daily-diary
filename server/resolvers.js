import { db } from "./server";

const getCurrentTime = () => {
  const today = new Date();
  return {
    year: today.getFullYear(),
    month: today.getMonth(),
    date: today.getDate(),
    hour: today.getHours(),
    minute: today.getMinutes()
  };
};

export const resolvers = {
  Query: {
    hello: () => "World",
    getNotes: async (_, { email }, __) => {
      console.log(`server, getNotes is called with ${email}`);
      const query = {
        "user.email": "astic1764@gmail.com"
      };
      const request = await db
        .collection("notes")
        .find(query)
        .toArray()
        .then(result => result);

      console.log(request);
      const result = request;
      return result;
    }
  },
  Mutation: {
    // Notes Function
    addNote: async (_, { email, text, isImportant }, ___) => {
      console.log(`server, addNote is called with ${email}`);
      const requestTime = getCurrentTime();
      const newNote = {
        time: requestTime,
        content: {
          text: text,
          isImportant: isImportant,
          kind: "not defined"
        },
        user: {
          email: email
        }
      };
      const request = await db
        .collection("notes")
        .insertOne(newNote)
        .then(result => result);

      const result = {
        passed: request.result.ok === 1,
        user: {
          email: request.ops[0].user.email
        }
      };
      return result;
    },
    // Account Functions
    signUp: async (_, { name, email, password, phoneNumber }, ___) => {
      console.log(`server, signUp is called with ${email}`);
      const newUser = { name, email, password, phoneNumber };
      const result = await db
        .collection("users")
        .insertOne(newUser)
        .then(result => result);
      const userResult = {
        name: result.ops[0].userEssential.name,
        email: result.ops[0].userEssential.email
      };
      return {
        passed: result.result.ok === 1,
        user: userResult
      };
    },
    logIn: async (_, { email, password }, ___) => {
      const query = { email: email, password: password };
      console.log(`server, login is called with ${email}`);
      const result = await db
        .collection("users")
        .findOne(query)
        .then(result => result);
      console.log(result);
      let requestTime = getCurrentTime();
      if (result) {
        console.log(`login passed`);
        const loginUser = { name: result.name, email: result.email };
        return {
          passed: result.email === email,
          user: loginUser,
          time: requestTime
        };
      } else {
        console.log("login Failed");
        return {
          passed: false,
          user: { name: "", email: "" },
          time: requestTime
        };
      }
    }
  }
};
