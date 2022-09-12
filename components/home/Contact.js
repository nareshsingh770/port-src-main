import React, { useRef, useState } from 'react'
import contactDetails from '../../actions/Actions';
import { useDispatch } from 'react-redux'
import { Container, Paper, Grid, Typography, Stack, TextField, Button } from '@mui/material';
import Heading, { Para } from '../../styled component';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import { Box } from '@mui/system';

export const initialFeild = {
    Name: '',
    Email: '',
    Subject: '',
    Message: ''
}
const Contact = () => {

    const inputfeilds = useRef()

    // const typedDetails = useSelector((store) => store.messageInput);
    const dispatch = useDispatch()



    const [inputEvent, setInput] = useState(initialFeild)

    const InputValues = (e) => {
        console.log(e.target.name)
        const { name, value } = e.target;

        setInput((oldVal) => {
            return {
                ...oldVal,
                [name]: value
            }
        })
    }

    const submitDetails = () => {

        dispatch(contactDetails(inputEvent))

        setInput(initialFeild)

    }
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

                            <Box component='form' ref={inputfeilds}>
                                <Grid container spacing={2}>
                                    <Grid item lg={6} xs={12}>
                                        <TextField sx={{ width: '100%' }} id="outlined-basic" value={inputEvent.Name} onChange={InputValues} name='Name' label="Name" variant="outlined" />
                                    </Grid>
                                    <Grid item lg={6} xs={12}>
                                        <TextField sx={{ width: '100%' }} id="outlined-basic" value={inputEvent.Email} onChange={InputValues} name='Email' label="Email" variant="outlined" />
                                    </Grid>
                                    <Grid item lg={12}>
                                        <TextField sx={{ width: '100%' }} id="outlined-basic" value={inputEvent.Subject} onChange={InputValues} name='Subject' label="Subject" variant="outlined" />
                                    </Grid>
                                    <Grid item lg={12}>
                                        <TextField sx={{ width: '100%' }} id="outlined-basic" value={inputEvent.Message} onChange={InputValues} name='Message' label="Message" variant="outlined" />
                                    </Grid>
                                    <Grid item lg={12} textAlign='right'>
                                        <Button size='large' variant='contained' color="primary" onClick={submitDetails} >Submit</Button>
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


