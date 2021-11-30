import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Product from './Product';
import products from './product-data';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(1),
    }

}));

export default function Products() {
    const classes = useStyles();

    return (
        <div className='container'>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} >
                        <Typography align='center' gutterBottom ><h2 className="section__title">Servicios</h2></Typography>
                    </Grid>
                    {
                        products.map(product => (
                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <Product key={product.id} product={product} />
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </div>
    );
}
