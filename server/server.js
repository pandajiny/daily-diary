import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";

const { ApolloServer } = require("apollo-server");
const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

client.connect(function(err) {
  console.log("MONGOdb connected");
});
export const db = client.db("daily-diary"); //mongodb database name

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen(4000).then(({ url }) => console.log(`Server running at ${url} `));
