import React from 'react';
import { ChatBox } from './ChatBox'; // Assuming you have a ChatBox component
import '../styles/ChatPage.css';
import axios from 'axios';
import { response } from 'express';
import { useState, useEffect } from 'react';
import { User, Reply, Post  } from '@prisma/client';
interface ChatPageProps {
    chatMessages: { title: string; body: string; filter: string }[]; // Define chatMessages prop
    userInfo: any;
}
interface PostData {
    id: number
    createdAt: string
    updatedAt: string
    title: string
    content: string
    tags: string
    replies: Reply[]
    user: User
    userId: string
}
export function ChatPage({ chatMessages, userInfo }: ChatPageProps) {
    const [fetchedMessages, setFetchedMessages] = useState<PostData[]>([]);
    const [timeArray, setTimeArray] = useState<string[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            await axios.get('http://localhost:8080/post/getAll',
                {}).then(function(response) {
                    console.log(response.data.data.timeArray);
                    console.log(response.data.data.posts);
                    setFetchedMessages(response.data.data.posts);
                    setTimeArray(response.data.data.timeArray);
                }).catch(function (error) {
                    console.log(error);
                });
        };
        fetchData();
    }, []);
    return (
        <div className='chatContainerStyle'>
            <div className='chatBoxContainerStyle'>
                {fetchedMessages && timeArray && fetchedMessages.map((message, index) => (
                    <ChatBox key={index}
                            timeDiff={timeArray[index]}
                            user={message.user}
                            postId={message.id}
                            initialTitle={message.title}
                            initialBody={message.content}
                            repliesData={message.replies}
                            initialFilter='FOOD' />
                ))}
            </div> 
        </div>
    );
}