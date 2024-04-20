import React, { useState, useEffect } from 'react';
import '../styles/ChatBox.css';
import '../styles/ReplyBox.css';
import editImage from '../assets/edit.png';
import replyImage from '../assets/reply.png';
import deleteImage from '../assets/delete.png';
import { ReplyBox } from './ReplyBox';
import { User, Reply } from '@prisma/client';
import axios from 'axios';

interface ChatBoxProps {
    user: User;
    postId: number;
    timeDiff: string;
    initialTitle: string;
    initialBody: string;
    repliesData: any[];
}

export function ChatBox({ user, timeDiff, postId, initialTitle, initialBody, repliesData}: ChatBoxProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(initialTitle);
    const [editedBody, setEditedBody] = useState(initialBody);
    const [isHidden, setIsHidden] = useState(false);
    const [replies, setReplies] = useState(''); // State for replies
    const [isEditingReplies, setIsEditingReplies] = useState(false);
    const handleEditClick = () => {
        setIsEditing(true);
    };
    const handleEditTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedTitle(e.target.value);
        console.log("Title changed to: " + e.target.value);
    };
    const handleEditBodyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedBody(e.target.value);
        console.log("Body changed to: " + e.target.value);
    };
    const handleEditComplete = () => {
        setIsEditing(false);
        axios.put('http://localhost:8080/post/update', {
            postId: postId,
            title: editedTitle,
            content: editedBody
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        })
    };
    const handleDeleteClick = () => {
        setIsHidden(true);
        console.log("Chat box deleted");
        axios.delete('http://localhost:8080/post/delete', {
            params: {
                postId: postId
            }
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    };
    
    const handleReplyEditClick = () => {
        if (isEditingReplies) { setIsEditingReplies(false); }
        else { setIsEditingReplies(true); }
    }
    const handlePostReply = (reply: string) => {
        setReplies(reply); // Add new reply to replies array
    };
    useEffect(() => {
    }, [replies]);
    
    if (isHidden) {
        return null; // Return null to hide the chat box
    }
    return (
        <div className={`chatBoxStyle`}>
            <div className='headerStyle'>
                {isEditing ? (
                    <div>
                        <input
                        type="text"
                        value={editedTitle}
                        onChange={handleEditTitleChange}
                        />
                        <button onClick={handleEditComplete}>Done</button>
                    </div>
                ) : (
                    <h3>{initialTitle}</h3>
                )}
            </div>
            {isEditing ? (
                <input
                    type="text"
                    value={editedBody}
                    onChange={handleEditBodyChange}
                />
            ) : (
                <p>{initialBody}</p>
            )}
            <div className='userInfoStyle'>
                <h2>Poster: {user.email}</h2>
                <h2>Time: {timeDiff}</h2>
            </div>
            <div className='chatFunctionalities'>
                <img src={editImage} alt="Edit Image" style={{ width: '3%', height: '3%', cursor: 'pointer'  }} onClick={handleEditClick} />
                <img src={replyImage} alt="Reply Image" style={{ width: '3%', height: '3%', cursor: 'pointer'  }} onClick={handleReplyEditClick} />
                <img src={deleteImage} alt="Delete Image" style={{ width: '3%', height: '3%', cursor: 'pointer'  }} onClick={handleDeleteClick} />
            </div>
            {isEditingReplies && <ReplyBox
                                postId={postId}
                                userId={user.id.toString()}
                                onPost={handlePostReply} />} {/* Display the ReplyBox only when editing */}
            {repliesData.map((reply, index) => (
                <p key={index}>{reply.user.email}: {reply.content}</p>
            ))}
        </div>
    );
}