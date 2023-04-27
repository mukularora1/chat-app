import Avatar from '@mui/joy/Avatar';
import Divider from '@mui/material/Divider';
// import List from '@mui/joy/List';
// import ListItem from '@mui/joy/ListItem';
// import ListItemButton from '@mui/joy/ListItemButton';
// import ListItemDecorator from '@mui/joy/ListItemDecorator';
// import Home from '@mui/icons-material/Home';

import React from 'react';
import './leftSide.css';
// import { ListItemContent } from '@mui/joy';
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
                {/* <List>
                    <ListItem>
                        <ListItemButton color='info' variant='soft'>
                            <ListItemDecorator>
                                <Home />
                            </ListItemDecorator>
                            <ListItemContent>Home</ListItemContent>
                            <KeyboardArrowRight /> 
                        </ListItemButton>
                    </ListItem>
                </List> */}
             <p> {title}</p>
                <p>{lastMessage}</p>
                <Divider light sx={{ marginTop: '20px' }} />
            </div>
        </div>
    );
}

export default ProfileFrameContainer;
