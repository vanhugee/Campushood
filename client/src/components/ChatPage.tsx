import React from 'react';
import { ChatBox } from './ChatBox'; // Assuming you have a ChatBox component
import '../styles/ChatPage.css';
import axios from 'axios';
import { response } from 'express';
import { useState, useEffect } from 'react';
import { Post } from '@prisma/client';


interface ChatPageProps {
    chatMessages: { title: string; body: string }[]; // Define chatMessages prop
    userInfo: any;
}

export function ChatPage({ chatMessages, userInfo }: ChatPageProps) {
    const [fetchedMessages, setFetchedMessages] = useState<Post[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            await axios.get('http://localhost:8080/post/getAll', 
                {}).then(function(response) {
                    console.log(response.data.data.posts);
                    setFetchedMessages(response.data.data.posts);
                }).catch(function (error) {
                    console.log(error);
                });
        };
        fetchData();
    }, []);
    console.log(fetchedMessages);

    return (
        <div className='chatContainerStyle'>
            {/* <div className='chatBoxContainerStyle'>
                {chatMessages.map((message, index) => (
                    <ChatBox key={index} initialTitle={message.title} initialBody={message.body} />
                ))}
            </div> */}
            <div className='chatBoxContainerStyle'>
                {fetchedMessages && fetchedMessages.map((message, index) => (
                    <ChatBox key={index} initialTitle={message.title} initialBody={message.content} />
                ))}
            </div>
        </div>
    );
}