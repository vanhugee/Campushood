import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";



export function DashBoard() {
    const [authenticated, setAuthenticated] = useState(false);
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user)
                setAuthenticated(true);
            }
        });
    }, []);
    if (!authenticated) {
        return (
            <h1>Not Authenticated</h1>
        )
    } else {
        return (
            <h1>DashBoardPage</h1>
        )
    }
}