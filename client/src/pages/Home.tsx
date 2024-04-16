import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { PostButton } from '../components/PostButton'
import { ChatPage } from '../components/ChatPage'
import { UserPoints } from '../components/UserPoints'
import { ReplyBox } from '../components/ReplyBox'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css'


export function Home() {
    const [chatMessages, setChatMessages] = useState<{ title: string; body: string; }[]>([]);
    const navigate = useNavigate();
    if (!localStorage.getItem('user')) {
        navigate('/login');
    }
    const userData = JSON.parse(localStorage.getItem('user')!);

    const handlePost = (title: string, body: string) => {
        setChatMessages([...chatMessages, { title, body }]);
    };

    return (
        <div>
            <Navbar />
            <div>
                <div className='sidebar'><Sidebar /></div>
                <div>
                    <PostButton
                        userInfo={ userData } 
                        onPost={handlePost} />
                    <div className='homeStyle'>
                        <ChatPage 
                            userInfo={ userData }
                            chatMessages={chatMessages} />
                    </div>
                </div>

            </div>
        </div>
    );
}
