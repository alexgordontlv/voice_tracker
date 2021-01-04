import React from 'react';
import './App.css';
import Details from './components/Details'
import {Grid} from '@material-ui/core'

function App() {
  return (
    <div className="App">
    <Grid container spacine={0} aliginItems="center" justify="center" style={{height: '100vh'}}>
      <Grid item xs={12} sm ={4}>
      <Details/>
      </Grid>
      <Grid item xs={12} sm ={4}>
        Main
      </Grid>
      <Grid item xs={12} sm ={4}>
      <Details/>
      </Grid>
    </Grid>
    
    </div>
  );
}

export default App;
