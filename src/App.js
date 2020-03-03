import React from "react";
import { ApolloProvider } from "react-apollo";
import { gql } from "apollo-boost";
import ApolloClient from "apollo-boost";

// import Calender from "./components/calender";
import Edit from "./components/edit";
import Notes from "./components/notes";
import Calender from "./components/calender";

const client = new ApolloClient({ uri: "http://localhost:4000/graphql" });
// Checking the Connect with Apollo Server
client
  .query({
    query: gql`
      {
        hello
      }
    `
  })
  .then(result => console.log(result));

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        Daily-Diary Project
        {/* <Calender></Calender> */}
        <Notes month={2} date={26}></Notes>
        <Edit></Edit>
        <Calender />
      </div>
    </ApolloProvider>
  );
}

export default App;
