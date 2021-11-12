import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { useStateValue } from '../Shop/StateProvider'
import accounting from "accounting";
import { getBasketTotal } from '../Shop/reducer';






const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();
  const [{ basket, shippingData }] = useStateValue();



  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Detalle
      </Typography>
      <List disablePadding>
        {basket.map((product) => (

          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.description} />
            <Typography variant="body2">{product.target}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            {accounting.formatMoney(getBasketTotal(basket), '$')}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            A pedido
          </Typography>
          <Typography gutterBottom>{shippingData.firstName}  {shippingData.lastName}</Typography>
          <Typography gutterBottom>{shippingData.address1}  {shippingData.altura}</Typography>
          <Typography gutterBottom>{shippingData.city}</Typography>


        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>

        </Grid>
      </Grid>
    </React.Fragment>
  );
}