import React, { useState} from 'react';
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { PostButton } from '../components/PostButton'
import { ChatPage } from '../components/ChatPage'
import Leaderboard from '../components/Leaderboard'
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css'
import Grid from '@mui/material/Grid';


export function Home() {
    const [chatMessages, setChatMessages] = useState<{ title: string; body: string; filter: string }[]>([]);
    const [postTag, setPostTag] = useState('');
    
    const callBackFunction = (tagData: string) => {
        setPostTag(tagData);
    }

    console.log(postTag);

    const navigate = useNavigate();
    if (!sessionStorage.getItem('user')) {
        navigate('/login');
    }
    const userData = JSON.parse(sessionStorage.getItem('user')!);

    const handlePost = (title: string, body: string, filter: string) => {
        setChatMessages([...chatMessages, { title, body, filter }]);
    };


    return (
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{backgroundColor: 'rgb(203, 195, 227)'}}>
                <Grid item xs={12} md ={12}>
                    <Navbar />
                </Grid>
                <Grid item xs={1} md ={1.5} className='sidebar'>
                    <Sidebar 
                    callBackFunction={callBackFunction}/>
                </Grid>
                <Grid item xs={11} md ={8}>
                    <PostButton userInfo={ userData } onPost={handlePost} />
                    <ChatPage postTag={ postTag } userInfo={ userData } chatMessages={chatMessages} />
                </Grid>
                <Grid item xs={12} md ={2.5}>
                    <Leaderboard />
                </Grid>
            </Grid>

        );
    }