// ReplyButton.tsx

import React, { useState } from 'react';
import '../styles/ReplyBox.css'; // Import the CSS file for the button styling

interface ReplyButtonProps {
    onPost: (body: string) => void; // Update the prop type to accept title and body
}

export function ReplyButton({ onPost }: ReplyButtonProps) {
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
