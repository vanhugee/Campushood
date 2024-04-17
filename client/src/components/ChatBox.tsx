import React, { useState, useEffect } from 'react';
import '../styles/ChatBox.css';
import '../styles/ReplyBox.css';
import editImage from '../assets/edit.png';
import replyImage from '../assets/reply.png';
import deleteImage from '../assets/delete.png';
import { ReplyBox } from './ReplyBox';
import { User, Reply } from '@prisma/client';

interface ChatBoxProps {
    user: User;
    postId: number;
    timeDiff: string;
    initialTitle: string;
    initialBody: string;
    initialFilter: string;
    repliesData: Reply[];
    repliesData: Reply[];
}
export function ChatBox({ user, timeDiff, postId, initialTitle, initialBody, repliesData}: ChatBoxProps) {
export function ChatBox({ user, timeDiff, postId, initialTitle, initialBody, repliesData}: ChatBoxProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(initialTitle);
    const [editedBody, setEditedBody] = useState(initialBody);
    /*const [editedFilter, setEditedFilter] = useState(initialFilter);*/
    const [isHidden, setIsHidden] = useState(false);
    const [replies, setReplies] = useState(''); // State for replies
    const [isEditingReplies, setIsEditingReplies] = useState(false);
    const handleEditClick = () => {
        setIsEditing(true);
    };
    const handleEditTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedTitle(e.target.value);
    };
    const handleEditBodyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedBody(e.target.value);
    };
    /*const handleEditFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedFilter(e.target.value);
    };*/
    const handleEditComplete = () => {
        setIsEditing(false);
    };
    const handleDeleteClick = () => {
        setIsHidden(true);
        console.log("Chat box deleted");
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
                    <input
                        type="text"
                        value={editedTitle}
                        onChange={handleEditTitleChange}
                        onBlur={handleEditComplete}
                    />
                ) : (
                    <h3>{editedTitle}</h3>
                )}
            </div>
            {isEditing ? (
                <input
                    type="text"
                    value={editedBody}
                    onChange={handleEditBodyChange}
                    onBlur={handleEditComplete}
                />
            ) : (
                <p>{editedBody}</p>
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
                <p key={index}>{reply.content}</p>
            ))}
        </div>
    );
}