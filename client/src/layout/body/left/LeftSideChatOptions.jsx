import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Input } from '@mui/joy';
import Avatar from '@mui/joy/Avatar';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import React from 'react';
import ProfileFrameContainer from './ProfileFrameContainer';
import './leftSide.css';
// here
import GroupsIcon from '@mui/icons-material/Groups';
import LogoutIcon from '@mui/icons-material/Logout';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import StarIcon from '@mui/icons-material/Star';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
const chatProfiles = [
    { title: '+86 4554 4556 12', lastMessage: 'last message of the chat' },
    { title: 'Mukul Arora', lastMessage: 'last message of the chat' },
    { title: 'Gaurav', lastMessage: 'last message of the chat' },
    { title: 'VIkram arya', lastMessage: 'last message of the chat' },
    { title: 'Jeel', lastMessage: 'last message of the chat' },
    { title: 'Vicky Singh', lastMessage: 'last message of the chat' },
    { title: 'Garry Mathur', lastMessage: 'last message of the chat' },
];
const topPopupOptions = [
    { title: 'New group', icon: <GroupsIcon fontSize='small' /> },
    { title: 'New community', icon: <PeopleIcon fontSize='small' /> },
    { title: 'Starred messages', icon: <StarIcon fontSize='small' /> },
    { title: 'Select chats', icon: <SpeakerNotesIcon fontSize='small' /> },
    { title: 'Settings', icon: <SettingsIcon fontSize='small' /> },
    { title: 'Log out', icon: <LogoutIcon fontSize='small' /> },
];
function LeftSideChatOptions() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <>
            <div className='LeftSideChatOptions__top'>
                <div className='LeftSideChatOptions__header'>
                    <Avatar
                        color='success'
                        variant='soft'
                        sx={{ '--Avatar-size': '60px', cursor: 'pointer' }}
                    />
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}>
                        <Paper sx={{ width: 320, maxWidth: '100%' }}>
                            <MenuList>
                                {topPopupOptions.map((el) => {
                                    return (
                                        <>
                                            <MenuItem>
                                                <Tooltip title={el.title}>
                                                    <ListItemIcon>
                                                        {el.icon}
                                                    </ListItemIcon>
                                                </Tooltip>

                                                <ListItemText>
                                                    {el.title}
                                                </ListItemText>
                                            </MenuItem>
                                        </>
                                    );
                                })}
                            </MenuList>
                        </Paper>
                    </Popover>
                    <IconButton
                        onClick={handleClick}
                        aria-describedby={id}
                        variant='plain'
                        sx={{
                            borderRadius: '50%',
                            width: '50px',
                            height: '50px',
                        }}>
                        <MoreVertIcon sx={{ width: '40px', height: '40px' }} />
                    </IconButton>
                </div>
                <Input
                    color='info'
                    startDecorator={<SearchIcon sx={{ marginRight: '20px' }} />}
                    disabled={false}
                    placeholder='Type something ...'
                    sx={{ width: '100%', '--Input-minHeight': '50px' }}
                    variant='outlined'
                />
                <Divider light sx={{ marginTop: '20px' }} />
                {chatProfiles.map((el, index) => {
                    return (
                        <ProfileFrameContainer
                            title={el.title}
                            lastMessage={el.lastMessage}
                            key={index}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default LeftSideChatOptions;
