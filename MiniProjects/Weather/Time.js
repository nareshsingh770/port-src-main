import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material'

const Time = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
    })
    return (
        <Typography sx={{ fontSize: '5rem', fontWeight: 'bold', mt: 10 }} textAlign='center' variant='h3'>{time}</Typography>
    )
}

export default Time