import Avatar from '@mui/joy/Avatar';
import Divider from '@mui/material/Divider';
import React from 'react';
import './leftSide.css';
function ProfileFrameContainer({ title, lastMessage, img }) {
    return (
        <div className='profileFrameContainer'>
            <div className='ProfileFrameContainer__left'>
                <Avatar
                    color='success'
                    variant='soft'
                    sx={{ '--Avatar-size': '60px', cursor: 'pointer' }}
                />
            </div>
            <div className='ProfileFrameContainer__right'>
                <p> {title}</p>
                <p>{lastMessage}</p>
                <Divider light sx={{ marginTop: '20px' }} />
            </div>
        </div>
    );
}

export default ProfileFrameContainer;
