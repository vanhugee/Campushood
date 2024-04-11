import React from 'react';
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { PostButton } from '../components/PostButton'
import { ChatPage } from '../components/ChatPage'
import { UserPoints } from '../components/UserPoints'
import '../styles/Home.css'


export function Home() {
    return (
        <><div>
            <Navbar />
        </div><div>
                <div className='sidebar'><Sidebar /></div>
                <div className='homeStyle'>
                    <PostButton />
                    <div className='userIconStyle'>
                        <UserPoints />
                    </div>
                    <ChatPage />

                </div>
            </div></>
    );
}
