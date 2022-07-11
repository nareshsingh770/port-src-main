import { Container, Grid, Paper, Stack, Button, Box } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MenuCards from './MenuCards';
import MenuList from './MenuItems';

const reverseList = ['all', ...new Set(MenuList.map((val) => {
    return val.category;
}))];



const Restuarant = () => {
    const navigate = useNavigate();
    const totalItems = MenuList.length;
    const [list, setList] = useState(MenuList);
    const [total, setTotal] = useState(totalItems);
    const [activeClass, setActive] = useState('all');

    const goBack = () => {
        navigate(-1);
    }
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
                                    <Grid item xs={12} xl={3} lg={3}>
                                        <MenuCards key={ind} id={ind} desc={val.description} img={val.img} cat={val.category} price={val.price} item={val.item} />
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Container>
            </Paper>

        </>
    )
}

export default Restuarant;
