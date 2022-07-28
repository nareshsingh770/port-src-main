import React, { useEffect, useReducer, useState } from 'react'
import { Button, Paper, Stack, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { textInput } from '../../actions/Actions';
import { weatherState } from '../../actions/Actions';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from '@emotion/styled';
import day from '../../Assets/day.webp'
import night from '../../Assets/night.webp'
import morning from '../../Assets/morning.webp'


const reducerShowWeather = (state, { type, weatherDetail }) => {
    switch (type) {
        case 'SHOW_WEATHER':
            return weatherDetail
        default: return state

    }
}


const Weather = () => {
    const inputText = useSelector(state => state.text_input)
    const location = useSelector(state => state.weather_set)

    const [time, setTime] = useState(new Date().toLocaleTimeString())
    const [background, setBack] = useState(new Date().getHours())
    const [weatherData, dispatchWeather] = useReducer(reducerShowWeather, '')


    const dispatch = useDispatch()


    const CardGlass = styled.div`
    width: 600px;
    padding: 40px;
    margin: auto;
    background: rgba( 255, 255, 255, 0.4 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 7px );
    -webkit-backdrop-filter: blur( 7px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    `



    useEffect(() => {
        const weatherAPIData = async () => {
            try {
                let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=2d09fd0d294278c0015aecacf7df42dd`
                const res = await fetch(url);
                const data = await res.json();

                const { temp, humidity, temp_max, temp_min } = data.main;
                const weath = data.weather[0].main;
                const wind = data.wind.speed;
                const time = new Date().toLocaleTimeString();

                const allExtractData = {
                    temp, humidity, temp_max, temp_min, weath, wind, time
                }

                dispatchWeather({ type: 'SHOW_WEATHER', weatherDetail: allExtractData })
            } catch (error) {
                alert("Cann't find....")
            }
        }
        weatherAPIData()
        setTimeout(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)

    }, [location, time])

    return (
        <Paper sx={{ minHeight: 'calc(100vh - 70px)', borderRadius: 0, backgroundImage: `url(${background > 19 || background < 5 ? night : background > 5 && background < 12 ? morning : background > 12 && background < 19 ? day : ''})`, backgroundSize: 'cover' }}>
            <Container maxWidth='xl' sx={{ pt: 14 }}>
                <CardGlass>
                    <Stack direction='row' justifyContent='center'>
                        <TextField type='text' name='city' value={inputText} placeholder='Enter any...' onChange={(e) => dispatch(textInput(e.target.value))} />
                        <Button variant='contained' color='primary' type="submit" onClick={() => dispatch(weatherState(inputText))}>Check</Button>
                    </Stack>
                    <Typography sx={{ fontSize: '5rem', fontWeight: 'bold', mt: 10 }} textAlign='center' variant='h3'>{time}</Typography>

                    <Typography variant='h3' sx={{ textTransform: 'capitalize', mt: 4 }} textAlign='center'>{location}</Typography>

                    <Typography variant='h3' sx={{ mt: 4, fontWeight: 'bold' }} textAlign='center'> {weatherData.temp}° C
                        <Typography sx={{ fontSize: '1.5rem' }} variant='caption'>({weatherData.weath})</Typography>
                    </Typography>

                    <Stack direction='row' alignItems='center' justifyContent='center' sx={{ my: 3 }}>
                        <Typography variant='h6' sx={{ mx: 1 }}><ArrowDownwardIcon />{weatherData.temp_min - 5}</Typography>
                        <RemoveIcon /><Typography variant='h6' sx={{ mx: 1 }}><ArrowUpwardIcon />{weatherData.temp_max}</Typography>
                    </Stack>
                    <Typography textAlign='center' sx={{ fontWeight: 'bold', fontSize: '1.3rem' }}>Wind<img src="https://i.imgur.com/B9kqOzp.png" height="17px" alt="weather" />: {weatherData.wind} km/h</Typography>
                    <Typography textAlign='center' sx={{ fontWeight: 'bold', fontSize: '1.3rem' }}>Humidity<i className="fa fa-tint mr-2" aria-hidden="true"></i> {weatherData.humidity}%</Typography>
                </CardGlass>
            </Container >
        </Paper >
    )
}

export default Weather
