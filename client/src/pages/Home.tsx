import React, { useState } from 'react';
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { PostButton } from '../components/PostButton'
import { ChatPage } from '../components/ChatPage'
import Leaderboard from '../components/Leaderboard'
import '../styles/Home.css'
import Grid from '@mui/material/Grid';
import { purple } from '@mui/material/colors';

export function Home() {
    const [chatMessages, setChatMessages] = useState<{ title: string; body: string; filter: string }[]>([]);
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
        /*         <div className='homeStyle'>
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
        
                    <Leaderboard users={users} /></div> */
         
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12}>
                <Navbar />
            </Grid>
            <Grid item xs={1.5} className='sidebar'>
                <Sidebar />
            </Grid>
            <Grid item xs={8}>
                <PostButton onPost={handlePost} />
                <ChatPage chatMessages={chatMessages} />
            </Grid>
            <Grid item xs={2.5}>
                <Leaderboard users={users} />
            </Grid>

        </Grid>

    );
}