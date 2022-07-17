import React from 'react'
// Styles
import './list-item.css'
import { Typography } from '@mui/material'
import ArrowForward from '@mui/icons-material/ArrowForwardIos';

const ListItem = ({ abbreviation, name, onClick }) => {
    const AVATAR_COLORS = ['#1aaade', '#7a57f4', '#8b1456', '#83b0b3', '#4f0f7f', '#f2603b', '#000000']

    return (
        <div className='container-list' onClick={onClick}>
            <div className='content'>
                <div className='logo' style={{ backgroundColor: AVATAR_COLORS[Math.floor(Math.random() * AVATAR_COLORS.length)] }}>
                    <Typography variant='h4' color="#fff">{abbreviation}</Typography>
                </div>
                <Typography variant='h4' color="#000">{name}</Typography>
            </div>
            <ArrowForward sx={{width: 50 }}/>
        </div>
    )
}

export default ListItem