// import React from "react";

// import { useQuery } from "@apollo/react-hooks";
// import { gql } from "apollo-boost";

// import { makeStyles } from "@material-ui/core/styles";
// import { Typography, Grid, Box } from "@material-ui/core";

// import Edit from "../components/edit";
// import Notes from "../components/notes";

// const GET_NOTES = gql`
//   {
//     getNotes {
//       year
//       month
//       date
//       text
//     }
//   }
// `;

// const useStyles = makeStyles(theme => ({
//   root: { flexGrow: 1 }
// }));

// const Home = () => {
//   const classes = useStyles();

//   const { loading, error, data } = useQuery(GET_NOTES);

//   const
//   return (
//     <div>
//       <Box marginLeft={4} marginTop={2}>
//         <Edit />
//         <Notes />
//       </Box>
//     </div>
//   );
// };

// export default Home;
