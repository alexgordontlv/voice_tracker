import React from "react";
import "./App.css";
import Details from "./components/Details";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import Main from "./components/Main";

function App() {
  const classes = useStyles();

  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacine={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={4}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={3} spacing={2}>
          <Details title="Income" />
          <Details title="Expense" />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
