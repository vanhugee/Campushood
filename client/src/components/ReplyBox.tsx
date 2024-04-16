import React, { useState } from 'react';
import axios from 'axios';
interface ReplyBoxProps {
    postId: number;
    userId: string;
    onPost: (reply: string) => void; // Callback function to handle posting a reply
}
export function ReplyBox({ postId, userId, onPost }: ReplyBoxProps) {
    const [reply, setReply] = useState('');
    const handleClick = () => {
        onPost(reply); // Call the onPost function with the entered reply
        setReply(''); // Clear the reply input after posting
        axios.post('http://localhost:8080/reply/create', {
            postId: postId,
            userId: userId,
            content: reply
        }).then(function (response) {
            console.log(response);
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