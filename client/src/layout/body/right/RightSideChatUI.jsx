import React, { useState } from 'react';
import ChatMessageBottomBox from './ChatMessageBottomBox';
import './rightSideChatUI.css';
function RightSideChatUI() {
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    return (
        <>
            <div className='top'>
                {messages.map((el, index) => {
                    return (
                        <div
                            key={index}
                            style={{ display: 'flex', justifyContent: 'end' }}>
                            <p
                                className='messageBySender'
                                style={{ textAlign: 'right' }}>
                                {el}
                            </p>
                        </div>
                    );
                })}
            </div>
            <div className='bottom'>
                <ChatMessageBottomBox
                    setMessages={setMessages}
                    messageInput={messageInput}
                    setMessageInput={setMessageInput}
                />
            </div>
        </>
    );
}

export default RightSideChatUI;
