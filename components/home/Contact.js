import React from 'react'
import contactDetails from '../../actions/Actions';
import { useSelector, useDispatch } from 'react-redux'
import { Container, Paper, Grid, Typography, Stack, TextField } from '@mui/material';
import Heading, { Para } from '../../styled component';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import { Box } from '@mui/system';


const Contact = () => {

    const typedDetails = useSelector((store) => store.messageInput);
    const dispatch = useDispatch()


    return (
        <>
            <Paper sx={{ py: 10, boxShadow: 'none', borderRadius: 0 }}>
                <Container maxWidth='xl'>
                    <Heading>Contact me</Heading>
                    <Grid container spacing={20}>
                        <Grid item lg={6} xs={12}>
                            <Typography variant='subtitle1' color='primary' sx={{ fontSize: '2rem', fontWeight: 'medium' }} >Get in Touch</Typography>
                            <Para>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum corporis fuga
                                corrupted. Doloribus quis soluta nesciunt veritatis vitae nobis?</Para>
                            <Stack direction='row' sx={{ my: 3 }}>
                                <CottageOutlinedIcon color='primary' sx={{ mx: 4 }} />
                                <Typography variant='subtitle1'>East Delhi, India</Typography>
                            </Stack>
                            <Stack direction='row' sx={{ my: 3 }}>
                                <CottageOutlinedIcon color='primary' sx={{ mx: 4 }} />
                                <Typography variant='subtitle1'>East Delhi, India</Typography>
                            </Stack>
                            <Stack direction='row' sx={{ my: 3 }}>
                                <CottageOutlinedIcon color='primary' sx={{ mx: 4 }} />
                                <Typography variant='subtitle1'>East Delhi, India</Typography>
                            </Stack>



                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <Typography variant='subtitle1' color='primary' sx={{ fontSize: '2rem', fontWeight: 'medium', mb: 2 }} >Message</Typography>

                            <Box component='form'>
                                <Grid container spacing={2}>
                                    <Grid item lg={6} xs={12}>
                                        <TextField sx={{ width: '100%' }} id="outlined-basic" name='name' label="Name" variant="outlined" value={typedDetails.name} onChange={(e) => dispatch(contactDetails(e.target))} />
                                    </Grid>
                                    <Grid item lg={6} xs={12}>
                                        <TextField sx={{ width: '100%' }} id="outlined-basic" name='email' label="Email" variant="outlined" value={typedDetails.email} onChange={(e) => dispatch(contactDetails(e.target))} />
                                    </Grid>
                                    <Grid item lg={12}>
                                        <TextField sx={{ width: '100%' }} id="outlined-basic" name='subject' label="Subject" variant="outlined" value={typedDetails.subject} onChange={(e) => dispatch(contactDetails(e.target))} />
                                    </Grid>
                                    <Grid item lg={12}>
                                        <TextField sx={{ width: '100%' }} id="outlined-basic" name='message' label="Message" variant="outlined" value={typedDetails.message} onChange={(e) => dispatch(contactDetails(e.target))} />
                                    </Grid>
                                </Grid>
                            </Box>

                        </Grid>
                    </Grid>

                </Container>
            </Paper>
        </>
    )
}

export default Contact;


