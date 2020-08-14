import React from "react";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import { Container, Grid, Typography } from "@material-ui/core";
import OnboardImg from "../img/background.svg";
import "../App.css";

const useStyles = makeStyles((theme) =>
  createStyles({
    onboardingBg: {
      height: "100vh",
      backgroundImage: `url(${OnboardImg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
  })
);

function Login() {
  const classes = useStyles();
  return (
    <Grid className={classes.onboardingBg}>
      <Grid>Login</Grid>
    </Grid>
  );
}

export default Login;
