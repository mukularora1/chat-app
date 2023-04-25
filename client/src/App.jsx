import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import ChatAppBody from './layout/body/ChatAppBody';
import Header from './layout/header/Header';
function App() {
    return (
        <>
            <Header />
            <ChatAppBody />
        </>
    );
}

export default App;
