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
        marginTop: '0.5rem'
    }

}));


const Total = () => {
    const classes = useStyles();
    const [{ basket }, dispatch] = useStateValue();

    return (

        <div className={classes.root}>
            <h5>Total: {basket?.length}
            </h5>
            <h5>{accounting.formatMoney(getBasketTotal(basket), '$')}
            </h5>
            <Link to={basket?.length > 0 ? '/Checkout' : '/Servicios'}><a className="button btn-total" >Comprar</a></Link>
        </div >




    )
}


export default Total