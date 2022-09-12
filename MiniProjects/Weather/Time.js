import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import { Stack } from '@mui/system'

const Time = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    const [date, setDate] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
        setDate(new Date().toLocaleDateString())
    }, [])
    return (
        <Stack direction='row' justifyContent="space-between" sx={{ position: 'relative', 'zIndex': '4' }}>
            <Typography sx={{ fontSize: '1.4rem', mt: 3 }} textAlign='center' variant='h3'>{time}</Typography>
            <Typography sx={{ fontSize: '1.4rem', mt: 3 }} textAlign='center' variant='h3'>{date}</Typography>
        </Stack>
    )
}

export default Time