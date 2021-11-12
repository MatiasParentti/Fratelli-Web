import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import accounting from 'accounting';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';
import { useStateValue } from './StateProvider'
import { actionType } from './reducer';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        backgroundColor: 'whitesmoke'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    action: {
        marginTop: '1rem',
    },
    cardAction: {
        display: 'flex',
        justifyContent: 'space-between',
        textAlign: 'center',
    },

}));



export default function ChekoutCard({ product: { id, name, productType, price, image, description, target } }) {
    const classes = useStyles();

    const [{basket  }, dispatch] = useStateValue();

    const removeItem = () => dispatch({
        type: actionType.REMOVE_ITEM,
        id,
    })
    return (
        <Card className={classes.root}>
            <CardHeader

                action={

                    <Typography
                        className={classes.action}
                        variant='h5'
                        color='textSecondary'
                    >

                    </Typography>
                }
                title={name}
                subheader="Servicio"
            />
            <CardMedia
                className={classes.media}
                image={image}
                title="Desinsectacion"
            />

            <CardActions className={classes.cardAction} disableSpacing>

                <Typography
                    className={classes.action}

                >
                    {target}
                </Typography>
                <IconButton onClick={removeItem}><DeleteIcon fontSize="medium"></DeleteIcon>  </IconButton>

            </CardActions>

        </Card>
    );
}
