import React, { useState } from 'react';
import '../styles/ChatBox.css';
import editImage from '../assets/edit.png';
import replyImage from '../assets/reply.png';
import deleteImage from '../assets/delete.png';

export function ChatBox() {
    const [isEditing, setIsEditing] = useState(false);
    const [message, setMessage] = useState("Im driving to the pickleball courts at 5:30pm today. I'll be at Rich Circle if anyone needs a ride! My car can fit 5 people!");
    const [isHidden, setIsHidden] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    };

    const handleEditComplete = () => {
        setIsEditing(false);
    };

    const handleDeleteClick = () => {
        // Delete the chat box here, for example, by setting a state to hide it
        // Or by removing it from the parent component's state or DOM
        setIsHidden(true);
        console.log("Chat box deleted");
    };

    if (isHidden) {
        return null; // Return null to hide the chat box
    }

    return (
        <div className='chatBoxStyle'>
            <div className='headerStyle'>
                <h1>Pickleball Carpool</h1>
            </div>
            {isEditing ? (
                <input
                    type="text"
                    value={message}
                    onChange={handleInputChange}
                    onBlur={handleEditComplete}
                />
            ) : (
                <p>{message}</p>
            )}
            <div className='userInfoStyle'>
                <h2>Poster: testemail@davidson.edu</h2>
            </div>
            <div className='chatFunctionalities'>
                <img src={editImage} alt="Edit Image" style={{ width: '3%', height: '3%' }} onClick={handleEditClick} />
                <img src={replyImage} alt="Reply Image" style={{ width: '3%', height: '3%' }} />
                <img src={deleteImage} alt="Delete Image" style={{ width: '3%', height: '3%' }} onClick={handleDeleteClick} />
            </div>
        </div>
    );
}
