import React from 'react';
import { ChatBox } from './ChatBox'; // Assuming you have a ChatBox component
import '../styles/ChatPage.css';

interface ChatPageProps {
    chatMessages: { title: string; body: string }[]; // Define chatMessages prop
}

export function ChatPage({ chatMessages }: ChatPageProps) {
    return (
        <div className='chatContainerStyle'>
            <div className='chatBoxContainerStyle'>
                {chatMessages.map((message, index) => (
                    <ChatBox key={index} initialTitle={message.title} initialBody={message.body} />
                ))}
            </div>
        </div>
    );
}