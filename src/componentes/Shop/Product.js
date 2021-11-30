import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AddShoppingCart } from '@material-ui/icons';
import { actionType } from './reducer';
import { useStateValue } from './StateProvider'


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
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },

}));

export default function Product({ product: { id, name, productType, price, image, description, target, info, link } }) {
    const classes = useStyles();
    const [{ basket }, dispatch] = useStateValue();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const addToBasket = () => {
        dispatch({
            type: actionType.ADD_TO_BASKET,
            item: {
                id,
                name,
                productType,
                image,
                price,
                description,
                target,
                info,
                link
            }
        })
    }

    return (
        <Card className={classes.root}>
            <CardHeader

                action={

                    <Typography
                        className={classes.action}
                        variant='h5'
                        color='textSecondary'
                    >
                        {target}
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
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton onClick={addToBasket} aria-label="Add to cart">
                    <AddShoppingCart fontSize='large' />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>{name} en CABA</Typography>
                    <Typography paragraph>
                        {info}
                    </Typography>
                    <Typography paragraph>
                        
                    </Typography>
                    <Typography>
                        
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
