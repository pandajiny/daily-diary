import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-boost";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const link = createHttpLink({ uri: "http://localhost:4000/graphql" });

const client = new ApolloClient({
  // link: new createHttpLink({ uri: "http://localhost:4000/graphql" }),
  cache: new InMemoryCache(),
  link
});

// // Checking the Connect with Apollo Server
// client
//   .query({
//     query: gql`
//       {
//         hello
//       }
//     `
//   })
//   .then(result => console.log(result));

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
