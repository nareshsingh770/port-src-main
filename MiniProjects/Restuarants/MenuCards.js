import { Button, Paper } from '@mui/material';
import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, CardHeader, Typography, IconButton, Stack } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import dish from '../../Assets/dish.jpg'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';




const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert ref={ref} variant="filled" {...props} />;
});

const MenuCards = (props) => {
    const [open, setOpen] = React.useState(false);
    const [cart, setCart] = useState(0)


    const clickHandler = (id) => {
        setOpen(true)
        setCart(prev => prev + 1)

    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (
        <>
            <Card elevation={3}>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={props.item}
                    subheader={props.cat}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={dish}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {props.desc}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing sx={{ justifyContent: 'space-between' }}>
                    {props.price}
                    <Button onClick={() => clickHandler(props.id)} variant='outlined'>Add<AddIcon sx={{ ml: 3 }} /></Button>
                    <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            {cart} item added!
                        </Alert>
                    </Snackbar>
                </CardActions>
            </Card>
        </>
    )
}

export default MenuCards
