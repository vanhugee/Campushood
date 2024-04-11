import React, { useState } from 'react';
import { NavBar } from '../components/NavBar'
import { PostButton } from '../components/PostButton'
import { ChatPage } from '../components/ChatPage'
import { UserPoints } from '../components/UserPoints'
import '../styles/Home.css'
 

export function Home() {
    return (
        <div className='homeStyle'>
            <PostButton />
            <div className='userIconStyle'>
                <UserPoints />
            </div>
            <ChatPage />

        </div>
    );
}