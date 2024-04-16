import React, { useState } from 'react';
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { PostButton } from '../components/PostButton'
import { ChatPage } from '../components/ChatPage'
import Leaderboard from '../components/Leaderboard'
import '../styles/Home.css'

export function Home() {
    const [chatMessages, setChatMessages] = useState<{ title: string; body: string; filter: string}[]>([]);
    const handlePost = (title: string, body: string, filter: string) => {
        setChatMessages([...chatMessages, { title, body, filter }]);
    };

    const users = [
        { id: 1, name: 'Alice', points: 200 },
        { id: 2, name: 'Bob', points: 300 },
        { id: 3, name: 'Charlie', points: 150 },
        { id: 2, name: 'Bob', points: 300 },
        { id: 3, name: 'Charlie', points: 150 },
        { id: 2, name: 'Bob', points: 300 },
        { id: 3, name: 'Charlie', points: 150 },
      ];

    return (
        <div className='homeStyle'>
            <Navbar />
            <section className="sidebarX">
                    <Sidebar />
            </section>
            <div className="container"> 
                <div className="content">
                    <div className="centered">
                        <PostButton onPost={handlePost} />
                    </div>
                    <div className='homeStyle'>
                        <ChatPage chatMessages={chatMessages} />
                    </div>
                </div>
            </div>
            <Leaderboard users={users} />
        </div>
    );
}