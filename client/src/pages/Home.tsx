import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { PostButton } from '../components/PostButton'
import { ChatPage } from '../components/ChatPage'
import { UserPoints } from '../components/UserPoints'
import '../styles/Home.css'
 

export function Home() {
    return (
        <div className='homeStyle'>
            <Navbar/>
            <Sidebar/>
            <PostButton />
            <div className='userIconStyle'>
                <UserPoints />
            </div>
            <ChatPage />

        </div>
    );
}import React from 'react';
