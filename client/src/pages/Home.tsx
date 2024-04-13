import React, { useState } from 'react';
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { PostButton } from '../components/PostButton'
import { ChatPage } from '../components/ChatPage'
import { UserPoints } from '../components/UserPoints'
import '../styles/Home.css'


export function Home() {
    const [chatMessages, setChatMessages] = useState<{ title: string; body: string; }[]>([]);

    const handlePost = (title: string, body: string) => {
        setChatMessages([...chatMessages, { title, body }]);
    };

    return (
        <div>
            <Navbar />
            <div>
                <div className='sidebar'><Sidebar /></div>
                <div className='userIconStyle'>
                    <UserPoints />
                </div>
                <div className='homeStyle'>
                    <PostButton onPost={handlePost} />
                    <ChatPage chatMessages={chatMessages} />
                </div>
            </div>
        </div>
    );
}
