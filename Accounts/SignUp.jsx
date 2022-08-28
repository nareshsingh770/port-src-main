import React, { useRef } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './Account.css';
import { initializeApp } from "firebase/app";
import { getDatabase, set, ref } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



const SignUp = () => {
    const registerRef = useRef()

    const firebaseConfig = {
        apiKey: "AIzaSyBnAW5CoADcqrM1WHRoDx4g20DcSEfYO7A",
        authDomain: "authentication-app-9eed8.firebaseapp.com",
        databaseURL: "https://authentication-app-9eed8-default-rtdb.firebaseio.com",
        projectId: "authentication-app-9eed8",
        storageBucket: "authentication-app-9eed8.appspot.com",
        messagingSenderId: "188390868661",
        appId: "1:188390868661:web:82d35c9b562c308c45a0fc"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const auth = getAuth();

    const register = (e) => {
        e.preventDefault();
        // console.log(loginRef)
        const inputOnly = [...registerRef.current.elements].filter(elm => {
            return elm.type === 'text' || elm.type === 'password'
        })
        const [emailElem, passwordElem] = inputOnly
        console.log(inputOnly)
        const email = emailElem.value
        const password = passwordElem.value


        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                set(ref(database, 'users/', user.uid), {
                    email: email
                })
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
    }

    return (
        <>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <Box component="form" ref={registerRef} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="confirm-password"
                            label="Confirm Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="confrim-password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            size='large'
                            onClick={register}
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Register
                        </Button>

                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default SignUp
