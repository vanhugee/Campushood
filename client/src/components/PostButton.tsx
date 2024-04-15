import { getAuth, onAuthStateChanged } from "firebase/auth";
import axios from 'axios';
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
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            console.log(user);
            if (user) {
                console.log(user);
                axios.post('http://localhost:8080/post/create', {
                    title: title,
                    content: body,
                    userId: user.uid,
                    tag: "TRANSPO",
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            } else {
                console.log("Unable to post");
            }
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
