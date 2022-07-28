import { Container, Grid, Paper, Stack, Button, Box } from '@mui/material';
import React, { useState } from 'react'
import MenuCards from './MenuCards';
import MenuList from './MenuItems';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useSelector } from 'react-redux';


const reverseList = ['all', ...new Set(MenuList.map((val) => {
    return val.category;
}))];

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert ref={ref} variant="filled" {...props} />;
});

const Restuarant = () => {
    const orderDetail = useSelector(store => {
        let amount = Object.values(store.orderInput);
        if (amount.length > 0) {

            let total = amount.map(val => val.price * val.quantity).reduce((prev, curr) => prev + curr)
            return total
        }
    })


    const totalItems = MenuList.length;
    const [list, setList] = useState(MenuList);
    const [total, setTotal] = useState(totalItems);
    const [activeClass, setActive] = useState('all');

    const [item, setItem] = useState('');





    // POSITION of the snackbar
    const vertical = 'bottom'
    const horizontal = 'right'


    const [open, setOpen] = React.useState(false);


    const openAlert = (item) => {
        setOpen(true)
        setItem(item)
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const showItems = (e) => {
        const btnVal = e.currentTarget.innerText.toLowerCase()
        console.log(btnVal)

        setActive(btnVal);


        if (btnVal === 'all') {
            setList(MenuList);
            setTotal(MenuList.length);
        } else {

            const filteredList = MenuList.filter((val) => {
                return val.category === btnVal;
            });
            setTotal(filteredList.length);
            setList(filteredList);
        }

    }


    return (
        <>
            <Paper sx={{ mt: 6, py: 5 }}>
                <Container maxWidth='xl'>
                    <Stack direction="row" spacing={2} justifyContent='center'>
                        {
                            reverseList.map((val, ind) => {
                                return (
                                    <>
                                        <Button key={ind} id={`btn-${ind + 1}`} variant={activeClass === val ? 'contained' : 'outlined'} onClick={showItems}>{val}</Button>
                                    </>
                                )
                            })
                        }

                    </Stack>
                    <Box sx={{ my: 4 }}>Showing {total} of {totalItems}</Box>
                    <Grid container spacing={6}>
                        {
                            list.map((val, ind) => {
                                return (
                                    <Grid key={ind + 1} item xs={12} xl={3} lg={3}>
                                        <MenuCards key={ind} id={ind} openSnackbar={openAlert} desc={val.description} img={val.img} cat={val.category} price={val.price} item={val.item} />
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Container>
            </Paper>
            <Snackbar open={open} anchorOrigin={{ vertical, horizontal }} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} sx={{ width: '100%' }}>
                    ADDED <i style={{ marginRight: '30px' }}>({item})</i> Total: ${orderDetail}

                </Alert>
            </Snackbar>
        </>
    )
}

export default Restuarant;
