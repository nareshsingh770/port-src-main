import React, { useEffect, useState, useRef } from 'react'
import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material';
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
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import { useTheme } from '@mui/material';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import OpacityOutlinedIcon from '@mui/icons-material/OpacityOutlined';


const Weather = () => {
    const location = useSelector(state => state.weather_set)
    const weatherData = useSelector(state => state.weather_data)
    const inputValue = useRef()
    const theme = useTheme()

    // const [background, setBack] = useState(new Date("Wed, 27 July 2016 13:30:00").getHours())            /// AfterNoon time
    const [background, setBack] = useState(new Date().getHours())


    const dispatch = useDispatch()


    const CardGlass = styled.div`
    width: 35%;
    padding: 40px;
    margin: 40px auto 0;
    background-image: linear-gradient(45deg, #28313B, #48546194);
    box-shadow: 1px 0px 6px 2px rgb(31 38 135 / 37%);
    -webkit-backdrop-filter: blur( 7px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    overflow:hidden;
    position: relative;
    color: #fff;
    .search-loc{
        border: 1px solid #000;
        padding: 20px;
        border-radius: 5px;
        margin-right: 20px;
        font-size: 1.2rem;
        background: #001e44;
        color: #fff;
    }
    .weather-icon{
        position: absolute;
        top: 40%;
        right: -60px;
        width: 300px;
        background: ${theme.palette.primary.main};
        border-radius: 50%;
        aspect-ratio: 1 / 1;
    }
    `


    const inputVal = () => {
        if (inputValue.current.value !== '')
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
        <Paper sx={{ overflow: 'auto', minHeight: 'calc(100vh - 70px)', borderRadius: 0, backgroundImage: `url(${background > 19 || background < 5 ? night : background > 5 && background < 12 ? morning : background > 12 && background < 19 ? day : ''})`, backgroundSize: 'cover' }}>
            <Container maxWidth='xl' sx={{ pt: 3 }}>
                <CardGlass>
                    <Stack direction='row' justifyContent='center'>
                        <input className='search-loc' type='text' ref={inputValue} name='city' placeholder='Enter any...' />
                        <Button variant='contained' color='primary' type="submit" onClick={inputVal}>Check</Button>
                    </Stack>
                    {/* <Stack justifyContent="space-between"> */}
                    <Time />

                    <Typography variant='h3' sx={{ mt: 10, fontSize: '5rem' }} textAlign='left'>{weatherData.temp}<sup style={{ fontSize: '2.5rem', color: theme.palette.primary.main }}>°C</sup></Typography>
                    <Typography sx={{ fontSize: '1.2rem', mb: 10, color: "#a9a9a9" }} variant='h3'>{weatherData.weatherCondition}
                        <Stack justifyContent='center' className='weather-icon' ><img src={`http://openweathermap.org/img/wn/${weatherData.weatherIcon}@4x.png`} alt='weather-icons' /></Stack >

                        <Stack direction='row' alignItems='center' my={1}>
                            <ArrowDownwardIcon />
                            <Typography variant='h6' sx={{ mx: 1 }}>{(weatherData.temp_min - 5).toFixed(2)}</Typography>
                            <RemoveIcon sx={{ mx: 2 }} />
                            <ArrowUpwardIcon />
                            <Typography variant='h6' sx={{ mx: 1 }}>{weatherData.temp_max}</Typography>
                        </Stack>
                        <AirOutlinedIcon /><Typography textAlign='left' variant='subtitle'>Wind: {weatherData.wind} km/h</Typography><br />
                        <OpacityOutlinedIcon /><Typography textAlign='left' variant='subtitle'>Humidity<i className="fa fa-tint mr-2" aria-hidden="true"></i> {weatherData.humidity}%</Typography>
                    </Typography>
                    <Stack direction='row' alignItems="center" sx={{ fontSize: '1.2rem', color: '#b7b7b7' }} ><RoomOutlinedIcon /><Typography variant='subtitle' sx={{ textTransform: 'capitalize', mt: 0 }} textAlign='left'>{location}</Typography></Stack >
                </CardGlass>
            </Container >
        </Paper >
    )
}

export default Weather
