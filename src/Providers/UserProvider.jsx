import React, { createContext, useContext, useEffect, useState } from 'react'
import { AuthContext } from './AuthProvider';
import axios from 'axios';

export const UserContext = createContext(null);

function UserProvider({children}) {
    const [currUser,setCUrrUser] = useState({role:null});
    const [fetching,setFetching] = useState(true);

    const {user,loading} = useContext(AuthContext);

    useEffect(()=>{
        if(!loading && user){
            const {displayName:name,email} = user;
            axios.get('http://localhost:5007/user',{
                params:
                {
                    name,
                    email,
                }
            })
            .then(({data})=> {
                setCUrrUser(data); setFetching(false); 
                console.log(currUser)
            }).catch(err => console.log(err))
        }else{
            setFetching(false);
        }
    },[loading,user])
    
    return (
        <UserContext.Provider value = {{currUser,fetching}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider