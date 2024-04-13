// PostButton.tsx

import React, { useState } from 'react';
import '../styles/PostButton.css'; // Import the CSS file for the button styling

interface PostButtonProps {
    onPost: (title: string, body: string) => void; // Update the prop type to accept title and body
}

export function PostButton({ onPost }: PostButtonProps) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleClick = () => {
        onPost(title, body); // Call the onPost function with title and body
        setTitle(''); // Clear the title input after posting
        setBody(''); // Clear the body input after posting
    };

    return (
        <div className="postContainer">
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <input type="text" value={body} onChange={(e) => setBody(e.target.value)} placeholder="Body" />
            <button onClick={handleClick}>Post</button>
        </div>
    );
}
