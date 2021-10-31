import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../Components/Firebase/Firebase.init';


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
// _______ sign in google _____ 
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .finally(() => { setLoading(false) });
    }
// _________ log out_____ 
    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setLoading(false))
    }

    // state changed or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [])
// __________________ return ___________ 
    return {
        user,
        loading,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;