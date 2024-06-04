import React, { createContext, useContext, useEffect, useState } from 'react'
import { AuthContext } from './AuthProvider';
import axios from 'axios';

export const UserContext = createContext(null);

function UserProvider({children}) {
    const [currUser,setCUrrUser] = useState({});
    const [fetching,setFetching] = useState(true);

    const {user,loading} = useContext(AuthContext);

    useEffect(()=>{
        if(!loading){
            const {displayName:name,email} = user;
            axios.get('http://localhost:5007/user',{
                params:
                {
                    name,
                    email
                }
            })
            .then(({data})=> {
                setCUrrUser(data); setFetching(false); 
                console.log(currUser)
            })
        }
    },[loading])
    
    return (
        <UserContext.Provider value = {{currUser,fetching}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider