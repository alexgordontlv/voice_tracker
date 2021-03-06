import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Divider,
  Grid,
} from "@material-ui/core";
import useStyles from "./main.Styles";
import Form from "./Form";
import List from "./List";

const Main = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance $1000
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: "1.5em", marginTop: "20px" }}
        ></Typography>
        <Divider />
        <Form />
      </CardContent>
      <CardContent className={classes.CardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
