import axios from 'axios';
import React, { useState } from 'react';
import '../styles/PostButton.css'; // Import the CSS file for the button styling




interface PostButtonProps {
    userInfo: any;
    onPost: (title: string, body: string, filter: string) => void; // Update the prop type to accept title and body
}

export function PostButton({ onPost, userInfo }: PostButtonProps) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [filter, setFilter] = useState(''); // State to track selected filter

    const handleClick = () => {
        onPost(title, body, filter); // Call the onPost function with title, body, and filter
        setTitle(''); // Clear the title input after posting
        setBody(''); // Clear the body input after posting
        setFilter(''); // Clear the filter input after posting
        console.log("PostButton_here", filter);
        let tag = "";
        if (filter === "Food") {
            tag = "FOOD";
        } else if (filter === "Transportation") {
            tag = "TRANSPO";
        } else if (filter === "Miscellaneous") {
            tag = "MISC";
        }
        axios.post('http://localhost:8080/post/create', {
            title: title,
            content: body,
            userId: userInfo.uid,
            tag: tag
        }).then(function (response) {
            axios.put('http://localhost:8080/user/update', {
                id: userInfo.uid,
                points: 5
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
        <div className="postContainer">
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="">Select Category</option>
                <option value="Food">Food</option>
                <option value="Transportation">Transportation</option>
                <option value="Miscellaneous">Miscellaneous</option>
                {/* Add more options as needed */}
            </select>
            <input type="text" value={body} onChange={(e) => setBody(e.target.value)} placeholder="Write a short description..." />
            <button onClick={handleClick}>Create Post</button>
        </div>
    );
}
