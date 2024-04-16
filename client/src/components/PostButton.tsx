import React, { useState } from 'react';
import '../styles/PostButton.css'; // Import the CSS file for the button styling

interface PostButtonProps {
    onPost: (title: string, body: string, filter: string) => void; // Update the prop type to accept title, body, and filter
}

export function PostButton({ onPost }: PostButtonProps) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [filter, setFilter] = useState(''); // State to track selected filter

    const handleClick = () => {
        onPost(title, body, filter); // Call the onPost function with title, body, and filter
        setTitle(''); // Clear the title input after posting
        setBody(''); // Clear the body input after posting
        setFilter(''); // Clear the selected filter after posting
    };

    return (
        <div className="postContainer">
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="">Select Filter</option>
                <option value="Food">Food</option>
                <option value="Transportation">Transportation</option>
                <option value="Miscellaneous">Miscellaneous</option>
                {/* Add more options as needed */}
            </select>
            <input type="text" value={body} onChange={(e) => setBody(e.target.value)} placeholder="Body" />
            <button onClick={handleClick}>Post</button>
        </div>
    );
}
