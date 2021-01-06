import React from 'react'
import {Card, CardHeader, CardContent, Typography, Divider,Grid} from '@material-ui/core'
import useStyles from './main.Styles';

const Main = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
            <CardContent>
                <Typography align="center" variant="h5">Total Balance $100</Typography>
                <Typography variant="subtitle1" style={{lineHeight: '1.5em', marginTop:'20px'}}>
                </Typography>
                <Divider/>
            </CardContent>
            <CardContent className={classes.CardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
