import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";

import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Grid>
      <Router>
        <Switch>
          <Route path={`/login`} exact component={Login} />
          <Route path={`/signup`} exact component={Signup} />
        </Switch>
      </Router>
    </Grid>
  );
}

export default App;
