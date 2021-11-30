import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Alert, AlertTitle } from "@material-ui/lab";


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
}));

export default function ModalForm() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

    };

    return (
        <div>
            <button type="submit" className='button' onClick={handleOpen}>
                Presupuestar
            </button>
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
                            <AlertTitle>Presupuesto enviado.</AlertTitle>
                            <p>Muchas Gracias</p>
                            <strong>Nos contactaremos a la brevedad</strong>
                        </Alert>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}