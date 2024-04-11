import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";



export function DashBoardPage() {
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
        <h1>DashBoard Page</h1>
    )
    
}