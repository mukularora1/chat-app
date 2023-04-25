import AddReactionIcon from '@mui/icons-material/AddReaction';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import ArticleIcon from '@mui/icons-material/Article';
import AttachmentIcon from '@mui/icons-material/Attachment';
import BallotIcon from '@mui/icons-material/Ballot';
import ImageIcon from '@mui/icons-material/Image';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import SendIcon from '@mui/icons-material/Send';
import { IconButton, Input } from '@mui/joy';
import Box from '@mui/material/Box';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Popover from '@mui/material/Popover';
import Tooltip from '@mui/material/Tooltip';
import { useRef, useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

function ChatMessageBottomBox({ setMessages, messageInput, setMessageInput }) {
    const videoRef = useRef(null);
    const [isCameraOn, setIsCameraOn] = useState(false);

    const handleMessageInput = (e) => {
        setMessageInput(e.target.value);
    };
    const handleCameraClick = async () => {
        try {
            setIsCameraOn(true);
            const stream = await navigator.mediaDevices.getUserMedia({
                video: true,
            });
            videoRef.current.srcObject = stream;
        } catch (err) {
            console.error('Error opening camera', err);
        }
    };
    const handleMessageSend = () => {
        if (messageInput) {
            setMessages((pre) => {
                return [...pre, messageInput];
            });
            setMessageInput('');
        }
    };
    const handleKeyDown = (e) => {
        if (e.keyCode === 13 && messageInput) {
            setMessages((pre) => {
                return [...pre, messageInput];
            });
            setMessageInput('');
        }
    };
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleCloseModal = () => {
        console.log('gvb');
        if (videoRef.current.srcObject) {
            videoRef.current.srcObject
                .getTracks()
                .forEach((track) => track.stop());
        }
        setIsCameraOn((pre) => !pre);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const topPopupOptions = [
        { title: 'Photo and video', icon: <ImageIcon fontSize='small' /> },
        {
            title: 'Camera',
            icon: (
                <PhotoCameraIcon fontSize='small' onClick={handleCameraClick} />
            ),
        },
        { title: 'Document', icon: <ArticleIcon fontSize='small' /> },
        {
            title: 'Contact',
            icon: <PermContactCalendarIcon fontSize='small' />,
        },
        { title: 'New sticker', icon: <AddToPhotosIcon fontSize='small' /> },
        { title: 'Poll', icon: <BallotIcon fontSize='small' /> },
    ];
    return (
        <div className='rightSideChatUI__chatInputWrapper'>
            <Modal
                open={isCameraOn}
                onClose={handleCloseModal}
                aria-labelledby='child-modal-title'
                aria-describedby='child-modal-description'>
                <Box sx={{ ...style }}>
                    <video ref={videoRef} autoPlay />
                </Box>
            </Modal>
            <Tooltip title='Emojis'>
                <IconButton
                    variant='plain'
                    sx={{ padding: '10px', margin: '0 5px' }}>
                    <AddReactionIcon sx={{ width: '40px', height: '40px' }} />
                </IconButton>
            </Tooltip>
            <Tooltip title='Attach'>
                <IconButton
                    variant='plain'
                    onClick={handleClick}
                    sx={{ padding: '10px', margin: '0 5px' }}>
                    <AttachmentIcon sx={{ width: '40px', height: '40px' }} />
                </IconButton>
            </Tooltip>
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
                                        <ListItemIcon>{el.icon}</ListItemIcon>
                                        <ListItemText>{el.title}</ListItemText>
                                    </MenuItem>
                                </>
                            );
                        })}
                    </MenuList>
                </Paper>
            </Popover>
            <Input
                color='info'
                disabled={false}
                placeholder='Type a message ...'
                sx={{
                    width: '75%',
                    '--Input-minHeight': '70px',
                    fontSize: '24px',
                }}
                variant='outlined'
                onChange={handleMessageInput}
                value={messageInput}
                onKeyDown={handleKeyDown}
            />
            <IconButton
                variant='plain'
                sx={{ padding: '10px', margin: '0 5px' }}
                onClick={handleMessageSend}>
                <SendIcon sx={{ width: '40px', height: '40px' }} />
            </IconButton>
        </div>
    );
}

export default ChatMessageBottomBox;
