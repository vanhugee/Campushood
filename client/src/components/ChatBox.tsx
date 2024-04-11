import React from 'react';
import '../styles/ChatBox.css';

export function ChatBox() {
    return (
        <div className='chatBoxStyle'>
            <div className='headerStyle'>
                <h1>Pickleball Carpool</h1>
            </div>
            <p>Im driving to the pickleball courts at 5:30pm today. I'll be at Rich Cirlce if anyone needs a ride! My car can fit 5 people.</p>
            <div className='userInfoStyle'>
                <h2>Poster: testemail@davidson.edu</h2>
            </div>
        </div>
    );
}
