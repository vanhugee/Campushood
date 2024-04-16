import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { PostButton } from '../components/PostButton'
import { ChatPage } from '../componenonPost={handlePost}ts/ChatPage'
import Leaderboard from '../components/Leaderboard'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css'
import Grid from '@mui/material/Grid';
import background2 from '../assets/purplebg.jpg'


export function Home() {
    const [chatMessages, setChatMessages] = useState<{ title: string; body: string; filter: string }[]>([]);
    const navigate = useNavigate();
    if (!localStorage.getItem('user')) {
        navigate('/login');
    }
    const userData = JSON.parse(localStorage.getItem('user')!);

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
        
         
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{backgroundColor: 'rgb(203, 195, 227)'}}>
                <Grid item xs={12}>
                    <Navbar />
                </Grid>
                <Grid item xs={1.5} className='sidebar'>
                    <Sidebar />
                </Grid>
                <Grid item xs={8}>
                    <PostButton userInfo={ userData } onPost={handlePost} />
                    <ChatPage userInfo={ userData } chatMessages={chatMessages} />
                </Grid>
                <Grid item xs={2.5}>
                    <Leaderboard users={users} />
                </Grid>
    
            </Grid>
    
        );
    }