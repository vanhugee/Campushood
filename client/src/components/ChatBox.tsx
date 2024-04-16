
import React, { useState } from 'react';
import '../styles/ChatBox.css';
import editImage from '../assets/edit.png';
import replyImage from '../assets/reply.png';
import deleteImage from '../assets/delete.png';
import { ReplyBox } from './ReplyBox';
import { User } from '@prisma/client';
import { userInfo } from 'os';

interface ChatBoxProps {
    userInfo: User;
    initialTitle: string;
    initialBody: string;
}
export function ChatBox({ userInfo, initialTitle, initialBody }: ChatBoxProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(initialTitle);
    const [editedBody, setEditedBody] = useState(initialBody);
    const [isHidden, setIsHidden] = useState(false);
    const [replies, setReplies] = useState<string[]>([]); // State for replies
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
    const handleEditComplete = () => {
        setIsEditing(false);
    };
    const handleDeleteClick = () => {
        setIsHidden(true);
        console.log("Chat box deleted");
    };
    const handleReplyEditClick= () => {
        setIsEditingReplies(true);
    }
    const handlePostReply = (reply: string) => {
        setReplies([...replies, reply]); // Add new reply to replies array
    };
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
                    <h1>{editedTitle}</h1>
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
                <h2>Poster: {userInfo.email}</h2>
                <h2>Time Posted: --:--</h2>
            </div>
            <div className='chatFunctionalities'>
                <img src={editImage} alt="Edit Image" style={{ width: '3%', height: '3%' }} onClick={handleEditClick} />
                <img src={replyImage} alt="Reply Image" style={{ width: '3%', height: '3%' }} onClick={handleReplyEditClick} />
                <img src={deleteImage} alt="Delete Image" style={{ width: '3%', height: '3%' }} onClick={handleDeleteClick} />
            </div>
            {isEditingReplies && <ReplyBox onPost={handlePostReply} />} {/* Display the ReplyBox only when editing */}
            {replies.map((reply, index) => (
                <p key={index}>{reply}</p>
            ))}
        </div>
    );
}