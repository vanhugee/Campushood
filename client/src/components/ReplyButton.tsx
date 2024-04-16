import { useState } from 'react';
import axios from 'axios';
import '../styles/ReplyBox.css'; 


interface ReplyButtonProps {
    userId: string;
    postId: number;
    onPost: (body: string) => void; // Update the prop type to accept title and body
}

export function ReplyButton({ userId, postId, onPost }: ReplyButtonProps) {
    const [body, setBody] = useState('');

    const handleReplyClick = () => {
        onPost(body); // Call the onPost function with title and body
        setBody(''); // Clear the body input after posting
    };

    return (
        <div className="replyContainer">
            <input type="text" value={body} onChange={(e) => setBody(e.target.value)} placeholder="Body" />
            <button onClick={handleReplyClick}>Reply</button>
        </div>
    );
}
