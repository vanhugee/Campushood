import React from 'react';
import { LogoutButton } from '../components/LogOut'
import { NavBar } from '../components/NavBar'
import { UserIcon } from '../components/UserIcon'
import { ChatPage } from '../components/ChatPage'
import { UserPoints } from '../components/UserPoints'


const homeStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
    position: 'relative',
};

const userIconStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50px', // Adjust the top position as needed
    right: '-1320px', // Adjust the right position as needed
    height: "100%",
    width: "100%",
};
 

export function Home() {
    return (
        <div style={homeStyle}>
            <NavBar />
            <div style={userIconStyle}>
                <UserIcon />
                <UserPoints />
            </div>
            <ChatPage />
            <LogoutButton />
        </div>
    );
}