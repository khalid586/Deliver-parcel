import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config'
import axios from 'axios';

export const AuthContext = createContext(null);
const auth = getAuth(app);

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => { 
        setLoading(true); 
        signOut(auth);
    }

    const signIn = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currUser=>{
            console.log(currUser);
            setUser(currUser);
            if(currUser){
                const userData = {
                    name:currUser.displayName,
                    email:currUser.email,
                }
                axios.post('http://localhost:5007/users',userData)
                .then(({data})=> console.log(data))
            }
            setLoading(false);  
        })

        return ()=>{
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        logOut,
        signIn,
        loading,
        setLoading,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
