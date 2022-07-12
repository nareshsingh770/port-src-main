import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, CardHeader, Typography, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import dish from '../../Assets/dish.jpg'
import RemoveIcon from '@mui/icons-material/Remove';
import { Box } from '@mui/system';
import { useDispatch } from 'react-redux';
import { orderList } from '../../actions/Actions';



const MenuCards = (props) => {

    // const orderDetail = useSelector(store => store.orderInput)
    const dispatch = useDispatch()


    const [active, setActive] = useState(false);
    const [count, setCount] = useState(0);

    const clickHandler = () => {

        const price = parseInt(props.price.substring(1))
        const itemName = props.item
        setCount(prev => prev + 1)
        dispatch(orderList(itemName, price, count + 1))
        setActive(true)
        props.openSnackbar(props.item, props.price)

    }
    const clickHandlerRemove = () => {
        props.openSnackbar(props.item)

        if (count > 0) {
            setCount(prev => prev - 1)
            setActive(true)
        }
    }

    // useEffect(() => {
    //     // console.log(orderDetail)
    // }, [orderDetail])


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

                    {active ? (
                        <Box>
                            <IconButton onClick={clickHandlerRemove}>
                                <RemoveIcon color='primary' />
                            </IconButton>
                            <input style={{ width: '50px', textAlign: 'center' }} value={count} onChange={(e) => setCount(e.target.value)} />
                            <IconButton onClick={clickHandler}>
                                <AddIcon color='primary' />
                            </IconButton>
                        </Box>) : <Button onClick={clickHandler} variant='outlined'> ADD <AddIcon sx={{ ml: 3 }} /></Button>}
                </CardActions>
            </Card>
        </>
    )
}

export default MenuCards
