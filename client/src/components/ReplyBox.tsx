import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface ReplyBoxProps {
    postId: number;
    userId: string;
    onPost: (reply: string) => void; // Callback function to handle posting a reply
}
export function ReplyBox({ postId, userId, onPost }: ReplyBoxProps) {
    const navigate = useNavigate();
    if (!sessionStorage.getItem('user')) {
        navigate('/login');
    }
    const userData = JSON.parse(sessionStorage.getItem('user')!);
    const [reply, setReply] = useState('');
    const handleClick = () => {
        onPost(reply); // Call the onPost function with the entered reply
        setReply(''); // Clear the reply input after posting
        axios.post('http://localhost:8080/reply/create', {
            postId: postId,
            userId: userData.uid,
            content: reply
        }).then(function (response) {
            console.log(response);
            axios.put('http://localhost:8080/user/update', {
                id: userData.uid,
                points: 2
            }).then(function (response) {
                console.log(response);
                window.location.reload();
            }).catch(function (error) {
                console.log(error);
            })
        }).catch(function (error) {
            console.log(error);
        });
    };
    return (
        <div className="replyContainer">
            <input type="text" value={reply} onChange={(e) => setReply(e.target.value)} placeholder="Enter reply" />
            <button onClick={handleClick}>Reply</button>
        </div>
    );
}