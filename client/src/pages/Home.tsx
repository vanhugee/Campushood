import React, { useState } from 'react';
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { PostButton } from '../components/PostButton'
import { ChatPage } from '../components/ChatPage'
import { UserPoints } from '../components/UserPoints'
import '../styles/Home.css'
export function Home() {
    const [chatMessages, setChatMessages] = useState<{ title: string; body: string; filter: string}[]>([]);
    const handlePost = (title: string, body: string, filter: string) => {
        setChatMessages([...chatMessages, { title, body, filter }]);
    };
    return (
        <div>
            <Navbar />
            <section className="sidebarX">
                    <Sidebar />
            </section>
            <div className="container">
                
                <div className="content">
                    <div className="topRight">
                        <UserPoints/>
                    </div>
                    <div className="centered">
                        <PostButton onPost={handlePost} />
                    </div>
                    <div className='homeStyle'>
                        <ChatPage chatMessages={chatMessages} />
                    </div>
                </div>
            </div>
        </div>
    );
}