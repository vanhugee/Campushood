import React from 'react';

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar';
import PostBoard from '../components/PostBoard';


export function Home() {
    
    return (
        <div>
            <Navbar/>
            <Sidebar/>
            <PostBoard/>
          
        </div>
       
    )
}