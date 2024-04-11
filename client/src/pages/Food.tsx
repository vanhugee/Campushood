import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Navbar from '../components/Navbar';
import PostBoard from '../components/PostBoard';
import Sidebar from '../components/Sidebar';



export function FoodPage() {
    const [authenticated, setAuthenticated] = useState(false);
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user);
                setAuthenticated(true);
            }
        });
    }, []);
    console.log(authenticated);
    if (!authenticated) {
        console.log("Not Authenticated")
        return (
            <h1>Not Authenticated</h1>
        )
    }
    return (
        <div>
            <Navbar />
            <Sidebar />
            <PostBoard />

        </div>
    )

}