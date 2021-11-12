import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ChekoutCard from './ChekoutCard';
import { Typography } from '@material-ui/core';
import Total from './Total';
import {useStateValue} from './StateProvider'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(1),
    }

}));

export default function ChekoutPage() {
    const classes = useStyles();
    const [{basket}, dispatch] = useStateValue();
    function FormRow() {
        return (
            <React.Fragment>
                {
                    basket?.map(item => (
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <ChekoutCard key={item.id} product={item} />
                        </Grid>
                    ))
                }
            </React.Fragment>
        )
    }

    return (
        <div>
            <div className='container'>
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} >
                            <Typography align='center' gutterBottom variant='h4'>Compras</Typography>
                        </Grid>

                        <Grid item xs={12} sm={8} md={9} container spacing={2} >
                            <FormRow></FormRow>
                        </Grid>

                        <Grid item xs={12} sm={4} md={3} >
                            <Typography align='center' gutterBottom variant='h4'><Total></Total></Typography>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}