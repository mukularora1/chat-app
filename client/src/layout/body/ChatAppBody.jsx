import React from 'react';
import './chatAppBody.css';
import LeftSideChatOptions from './left/LeftSideChatOptions';
import RightSideChatUI from './right/RightSideChatUI';
function ChatAppBody() {
    return (
        <div className='chatBodyWrapper'>
            <div className='chatBodyWrapper__left'>
                <LeftSideChatOptions />
            </div>
            <div className='chatBodyWrapper__right'>
                <RightSideChatUI />
            </div>
        </div>
    );
}

export default ChatAppBody;
