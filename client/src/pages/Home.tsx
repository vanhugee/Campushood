import React from 'react';
import { LoginButton } from '../components/LogIn'
import { LogoutButton } from '../components/LogOut'
import { NavBar } from '../components/NavBar'
import { UserIcon } from '../components/UserIcon'


export function Home() {
    return (
        <div>
            <UserIcon />
            <NavBar />
            <LoginButton />
            <LogoutButton />
        </div>
        
    )
}