import React, { createContext, useContext, useEffect, useState } from 'react'
import { AuthContext } from './AuthProvider';
import axios from 'axios';

export const UserContext = createContext(null);

function UserProvider({children}) {
    const [currUser,setCUrrUser] = useState({role:'null'});
    const [fetching,setFetching] = useState(true);

    const {user,loading} = useContext(AuthContext);
    console.log(user?.email)
    useEffect(()=>{
        if(!loading && user){
            const {displayName:name,email} = user;
            axios.get('https://b9a12-server-side-khalid586.vercel.app/user',{
                params:
                {
                    name,
                    email,
                }
            })
            .then(({data})=> {
                setCUrrUser(data); setFetching(false); 
            }).catch(err => console.log(err))
        }
    },[loading,user])
    
    return (
        <UserContext.Provider value = {{currUser,fetching}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider