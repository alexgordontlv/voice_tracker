import React, { useState, useContext } from "react";
import {
  Grid,
  TextField,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import useStyles from "./formStyles";
import { ExpenseTrackerContext } from "../context/context";
import { v4 as uuidv4 } from "uuid";
const Form = () => {
  const initialState = {
    amount: "",
    category: "",
    type: "Income",
    date: "1989-11-11",
  };
  const [state, setState] = useState(initialState);
  const { addTransaction } = useContext(ExpenseTrackerContext);
  const handleClick = (e) => {
    const transaction = { ...state, amount: +state.amount, id: uuidv4() };
    e.preventDefault();
    addTransaction(transaction);
    setState(initialState);
  };
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
          ...
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={state.type}
            onChange={(e) => {
              setState({ ...state, type: e.target.value });
            }}
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={state.category}
            onChange={(e) => {
              setState({ ...state, category: e.target.value });
            }}
          >
            <MenuItem value="buisness">Buisness</MenuItem>
            <MenuItem value="sallary">Sallary</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          type="number"
          lable="Amount"
          value={state.amount}
          onChange={(e) => {
            setState({ ...state, amount: e.target.value });
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          type="date"
          lable="Date"
          value={state.date}
          onChange={(e) => {
            setState({ ...state, date: e.target.value });
          }}
        />
      </Grid>
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        fullWidth
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Create
      </Button>
    </Grid>
  );
};

export default Form;
