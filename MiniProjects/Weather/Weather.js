import React, { useEffect, useState, useRef } from 'react'
import { Button, Paper, Stack, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { weatherState, weatherDataAction } from '../../actions/Actions';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from '@emotion/styled';
import day from '../../Assets/day.webp'
import night from '../../Assets/night.webp'
import morning from '../../Assets/morning.webp'
import Time from './Time';



const Weather = () => {
    const location = useSelector(state => state.weather_set)
    const weatherData = useSelector(state => state.weather_data)
    const inputValue = useRef()

    const [background, setBack] = useState(new Date().getHours())


    const dispatch = useDispatch()


    const CardGlass = styled.div`
    width: 600px;
    padding: 40px;
    margin: auto;
    background: rgb(118 118 118 / 40%);
    box-shadow: 1px 0px 6px 2px rgb(31 38 135 / 37%);
    backdrop-filter: blur( 7px );
    -webkit-backdrop-filter: blur( 7px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    overflow:hidden;

    img.weather-icon{
        position: absolute;
        top: 30%;
        right: -60px;
        width: 300px;
        opacity: 0.5;
    }
    `


    const inputVal = () => {
        dispatch(weatherState(inputValue.current.value))
    }


    useEffect(() => {
        const weatherAPIData = async () => {
            try {
                let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=2d09fd0d294278c0015aecacf7df42dd`
                const res = await fetch(url);
                const data = await res.json();

                const { temp, humidity, temp_max, temp_min } = data.main;
                const weatherCondition = data.weather[0].main;
                const weatherIcon = data.weather[0].icon;
                const wind = data.wind.speed;

                console.warn(data)

                const allExtractData = {
                    temp, humidity, temp_max, temp_min, weatherCondition, wind, weatherIcon
                }

                dispatch(weatherDataAction(allExtractData))
            } catch (error) {
                alert("Cann't find....")
            }
        }
        weatherAPIData()

    }, [location])

    return (
        <Paper sx={{ minHeight: 'calc(100vh - 70px)', borderRadius: 0, backgroundImage: `url(${background > 19 || background < 5 ? night : background > 5 && background < 12 ? morning : background > 12 && background < 19 ? day : ''})`, backgroundSize: 'cover' }}>
            <Container maxWidth='xl' sx={{ pt: 14 }}>
                <CardGlass>
                    <Stack direction='row' justifyContent='center'>
                        <TextField type='text' inputRef={inputValue} name='city' placeholder='Enter any...' />
                        <Button variant='contained' color='primary' type="submit" onClick={inputVal}>Check</Button>
                    </Stack>
                    <Time />

                    <Typography variant='h3' sx={{ textTransform: 'capitalize', mt: 4 }} textAlign='center'>{location}</Typography>

                    <Typography variant='h3' sx={{ mt: 4, fontWeight: 'bold' }} textAlign='center'> {weatherData.temp}° C
                        <Typography sx={{ fontSize: '1.5rem' }} variant='caption'>({weatherData.weatherCondition})</Typography>
                        <img className='weather-icon' src={`http://openweathermap.org/img/wn/${weatherData.weatherIcon}@4x.png`} alt='weather-icons' />
                    </Typography>

                    <Stack direction='row' alignItems='center' justifyContent='center' sx={{ my: 3 }}>
                        <Typography variant='h6' sx={{ mx: 1 }}><ArrowDownwardIcon />{(weatherData.temp_min - 5).toFixed(2)}</Typography>
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
