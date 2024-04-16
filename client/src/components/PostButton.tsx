import { getAuth, onAuthStateChanged } from "firebase/auth";
import axios from 'axios';
import React, { useState } from 'react';
import '../styles/PostButton.css'; // Import the CSS file for the button styling



interface PostButtonProps {
    userInfo: any;
    onPost: (title: string, body: string) => void; // Update the prop type to accept title and body
}

export function PostButton({ onPost, userInfo }: PostButtonProps) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    console.log("PostButton", userInfo);

    const handleClick = () => {
        onPost(title, body); // Call the onPost function with title and body
        setTitle(''); // Clear the title input after posting
        setBody(''); // Clear the body input after posting
        console.log("PostButton_here", userInfo.uid);
        axios.post('http://localhost:8080/post/create', {
            title: title,
            content: body,
            userId: userInfo.uid,
            tag: "TRANSPO"
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    };

    return (
        <div className="postContainer">
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <input type="text" value={body} onChange={(e) => setBody(e.target.value)} placeholder="Body" />
            <button onClick={handleClick}>Post</button>
        </div>
    );
}
