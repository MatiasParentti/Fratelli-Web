import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Alert, AlertTitle } from "@material-ui/lab";
import { useHistory } from "react-router-dom";
import { actionType } from '../Shop/reducer';
import { useStateValue } from '../Shop/StateProvider';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: 'whitesmoke',
        border: '2px solid hsl(197,36%,9%)',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
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

export default function ModalPay2() {
    const [{ basket }, dispatch] = useStateValue();
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const historial = useHistory();
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        dispatch({
            type: actionType.EMPTY_BASKET,
            basket: [],
        })
        historial.push('/')
    };

    return (
        <div>


            <Button  onClick={handleOpen}variant='contained' color='primary' className={classes.button}>Realizar Pago</Button>
           
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <Alert className={classes.root} severity="success">
                            <AlertTitle>Gracias por su compra</AlertTitle>
                            <strong>Nos contactaremos a la brevedad</strong>
                        </Alert>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}