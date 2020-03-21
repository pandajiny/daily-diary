import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// import about Apollo Graphql
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-boost";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import App from "./App";

const link = createHttpLink({ uri: "http://localhost:4000/graphql" });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
});

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
