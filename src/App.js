import React from 'react';
import './App.css';
import Details from './components/Details'
import {Grid} from '@material-ui/core'
import useStyles from './styles'

function App() {
  const classes = useStyles();

  return (
    <div className={classes.grid}>
    <Grid container spacine={0} aliginItems="center" justify="center" style={{height: '100vh'}}>
      <Grid item xs={12} sm ={4}>
      <Details title="Income"/>
      </Grid>
      <Grid item xs={12} sm ={4}>
        Main
      </Grid>
      <Grid item xs={12} sm ={4}>
      <Details title="Expense"/>
      </Grid>
    </Grid>
    
    </div>
  );
}

export default App;
