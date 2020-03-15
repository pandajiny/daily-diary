import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
// import Link from "@material-ui/core/link";
import "typeface-roboto";

// import Calender from "./components/calender";
// import Edit from "./components/edit";
// import Notes from "./components/notes";
import Account from "./components/Account/Account.js";
import Home from "./components/Home/home";

const useStyles = makeStyles(theme => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2)
    }
  },
  Title: {
    color: "#422A59",
    marginLeft: 7
  },
  NavBar: {
    // background: "#895DA6",
    padding: 10,
    color: "#895DA6",
    borderRadius: 4,
    width: "50%",
    marginTop: 10,
    paddingLeft: 20
  }
}));

function App() {
  const classes = useStyles();
  const [loginState, setLoginState] = useState(false);

  const getLogin = () => {
    console.log(`getLogin`);
    if (loginState) {
      console.log(`already Logged in, cancle Req`);
    } else {
      setLoginState(true);
      localStorage.setItem("loginState", true);
    }
  };
  const getLogout = () => {
    if (!loginState) {
      console.log(`already Logged out, cancle Req`);
    } else {
      setLoginState(false);
      localStorage.setItem("loginState", false);
    }
  };
  return (
    <Router>
      <Switch>
        <Route exact path="/account">
          <Account />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    // <div className="App">
    // {/* <Typography className={classes.Title} variant="h2">
    //   Daily-Diary Project
    // </Typography>
    // <Typography className={classes.NavBar}>
    //   <Link href="#" color="inherit">
    //     Notes
    //   </Link>
    // </Typography> */}
    // <Account />
    // <Switch>
    //     {/* <Route exact path="/" render={() => <Redirect to="/notes" />} /> */}
    //     {/* <Route path="/" components={() => <Account />} />
    //     <Route exact path="/notes" component={Notes} /> */}
    //     {/* <Route
    //       exact
    //       path="/login"
    //       component={() => <Login getLogin={() => getLogin} />}
    //     /> */}
    //   {/* </Switch>
    // </div> */}
  );
}

export default App;
