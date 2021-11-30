import accounting from "accounting";
import {makeStyles } from "@material-ui/core";
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: ' center',
        height: '20vh',
    },
    button: {
        
    },
    h6: {
     
    }

}));


const Total = () => {
    const classes = useStyles();
    const [{ basket }, dispatch] = useStateValue();

    return (

        <div className={classes.root}>
            <h6 className={classes.h6} >Total: {accounting.formatMoney(getBasketTotal(basket), '$')}
            </h6>
            <Link to='/Checkout'><a className="button btn-total" >Comprar</a></Link>
        </div >




    )
}


export default Total