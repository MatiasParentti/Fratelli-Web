import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useForm, FormProvider } from 'react-hook-form';
import AddressInput from './AddressInput';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useStateValue } from '../Shop/StateProvider'
import { actionType } from '../Shop/reducer';
import { firebaseCrear } from '../../firebaseConfig';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

export default function AddressForm({ handleNext }) {

   

    const historial = useHistory();
    const [{ basket, shippingData }, dispatch] = useStateValue();
    const classes = useStyles();
    const servicio = basket.map((item) => (item.name));
    const methods = useForm();


    return (
        <>
            <Typography variant="h6" gutterBottom>
                Datos para el servicio
            </Typography>

            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(data => {
                    data['servicio'] = servicio;
                    firebaseCrear('agenda', data)
                    dispatch({
                        type: actionType.SET_SHIPPINGDATA,
                        shippingData: data,
                    });
                    handleNext();
                })}>
                    <Grid container spacing={3}>

                        <AddressInput required type="text" name="firstName" label="Nombre" />
                        <AddressInput required name="lastName" label="Apellido" />
                        <AddressInput required name="address1" label="Direccion" />
                        <AddressInput required name="altura" label="Altura" />
                        <AddressInput required name="city" label="Localidad" />
                        <AddressInput required type="number" name="number" label="Numero" />

                    </Grid>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                        <Button className={classes.button} component={Link} to='/Cart'>Volver al carrito</Button>
                        <Button className={classes.button} type='submit' variant='contained' color='primary' >Siguiente</Button>

                    </div>

                </form>
            </FormProvider>
        </>
    );

}