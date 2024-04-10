import React from 'react';
import { LoginButton } from '../components/LogIn'
import '../styles/HomePage.css'
import background from '../assets/campus-background.jpg'



export function Home() {
    
    return (
        <div className='homeWrapper' style={{ backgroundImage: `url(${background})` }}>
            <h1>Welcome to CampusHood</h1>
            <h3>Your ultimate solution to resource sharing on college campuses</h3>
            <LoginButton />
        </div>
    )
}
