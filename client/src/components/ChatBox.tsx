import React from 'react';

const chatBoxStyle: React.CSSProperties = {
    width: '400px',
    height: '300px',
    backgroundColor: 'purple',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(1, 1, 1, 1)',
    padding: '40px',
    marginBottom: '20px', // Add margin bottom to separate chat boxes
    display: 'flex',
    flexDirection: 'column',
    color: 'white', // Set the text color to white
    
};

const headerStyle: React.CSSProperties = {
    borderBottom: '2px solid white', // Add border bottom to create a white-lined box effect
    borderTop: '2px solid white',
    borderRight: '2px solid white',
    borderLeft: '2px solid white',
    paddingBottom: '10px', // Add some padding to make it visually appealing
    textAlign: 'center', // Center the text
};

const userInfoStyle: React.CSSProperties = {
    verticalAlign: 'bottom',
    textAlign: 'right',
    fontSize: '50%',
}

export function ChatBox() {
    return (
        <div style={chatBoxStyle}>
            <div style={headerStyle}>
                <h1>Pickleball Carpool</h1>
            </div>
            <p>Im driving to the pickleball courts at 5:30pm today. I'll be at Rich Cirlce if anyone needs a ride! My car can fit 5 people.</p>
            <div style={userInfoStyle}>
                <h2>Poster: testemail@davidson.edu</h2>
            </div>
        </div>
    );
}
