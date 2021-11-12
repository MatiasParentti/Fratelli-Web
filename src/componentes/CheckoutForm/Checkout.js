import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import Review from './Review';
import { useStateValue } from '../Shop/StateProvider'
import { actionType } from '../Shop/reducer';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({

  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Datos para el servicio', 'Tu compra'];



export default function Checkout() {
  const historial = useHistory();
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [{  basket }, dispatch] = useStateValue();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm handleNext={handleNext} />;
      case 1:
        return <Review />;
      default:
        throw new Error('Unknown step');
    }
  }

  const borrar = () => {
    dispatch({
      type: actionType.EMPTY_BASKET,
      basket: [],
    })
    alert('Link Mercado Pago')
    historial.push('/')
  }
  const borrar1 = () => {
    dispatch({
      type: actionType.EMPTY_BASKET,
      basket: [],
    })
    alert('Gracias por su compra')
    historial.push('/')
  }


  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Reservar
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Gracias por su compra
                </Typography>
                <Typography variant="subtitle1">
                  Vamos a estar comunicandos con usted para coordinar dia y horario del Servicio.
                </Typography>
                <Typography variant="subtitle1">
                  Debajo el link de Mercado Pago.
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Button onClick={borrar} variant='contained' color='primary' className={classes.button}>Realizar Pago</Button>
                  <Button onClick={borrar1}  className={classes.button}>Pagar en efectivo</Button>
                </div>
              </React.Fragment>
            ) : (

              <React.Fragment>
                {getStepContent(activeStep)}

                {activeStep !== 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }} >
                    <Button onClick={handleBack} className={classes.button}>
                      Volver
                    </Button>
                    <Button variant="contained"
                      color="primary" onClick={handleNext} className={classes.button}>
                      Finalizar
                    </Button>
                  </div>
                )}

              </React.Fragment>

            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}

