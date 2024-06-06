import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Providers/AuthProvider';
import { Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Providers/UserProvider';
import ErrorPage from '../ErrorPage';
import Users from '../../Components/Users';

function UsersPage() {
    const [users,setUsers] = useState([]);
    const {currUser} = useContext(UserContext);
    const {role} = currUser;

    useEffect(()=>{
        axios.get('https://b9a12-server-side-khalid586.vercel.app/users')
        .then(({data})=>setUsers(data))
        .catch(err=>console.log(err))
    },[])
    return (
        <div>
        {
            role != 'admin'? <ErrorPage></ErrorPage>:
            <div>
                <Users></Users>
            </div>
        }
        </div>
    )
}

export default UsersPage