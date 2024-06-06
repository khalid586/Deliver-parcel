import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../Providers/UserProvider'
import Spinner from '../Components/Spinner';
import ErrorPage from '../Pages/ErrorPage';

function SpecificRoute({children,currRole}) {
    const {currUser,fetching} = useContext(UserContext);
    const [role,setRole] = useState('');

    useEffect(()=>{
        if(!fetching){
            console.log(currUser.role)
            setRole(currUser.role);       
        }
    },[fetching])

    console.log(role)

    if(fetching) return <Spinner></Spinner>
    else if(role === currRole) return children
    else return <ErrorPage></ErrorPage>
}

export default SpecificRoute