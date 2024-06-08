import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import Spinner from './Spinner';
import { UserContext } from '../Providers/UserProvider';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../Providers/AuthProvider';
import Title from './Title';

function Users() {
  const [users,setUsers] = useState([]);
  const {currUser,fetching} = useContext(UserContext);
  const {user,loading} = useContext(AuthContext);
  const [refresh,setRefresh] = useState(true);

  useEffect(()=>{
      if(!loading){
        axios.get('https://b9a12-server-side-khalid586.vercel.app/users',{
          params:{
            email:user?.email
          }
        })
        .then(({data})=>setUsers(data))
        .catch(err=>console.log(err))
      }
  },[loading,refresh])

  function updateUser(role,id){
    const updatedData = {
      role
    }
    console.log(role,id);
    axios.patch(`https://b9a12-server-side-khalid586.vercel.app/update/user/${id}`,updatedData)
    .then(({data})=> {
      console.log(data);
      setRefresh(!refresh);
      toast.success('Role updated successfully')
    })
    .catch(error => console.log(error))
  }

  console.log(users)
    return (
      <>
      <ToastContainer></ToastContainer>
      {
        fetching ? <Spinner></Spinner>:
        <div className="text-xs m-4 p-4 border-2 border-blue-600 rounded-lg shadow overflow-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((
                  {
                        name,
                        email,
                        role,
                        _id,
                  }
                )=> (
                  <tr key={_id}>
                    <td className="px-6 py-4 whitespace-nowrap"> {_id}</td>
                    <td className="px-6 py-4 whitespace-nowrap"> {name}</td>
                    <td className="px-6 py-4 whitespace-nowrap"> {email}</td>
                    <td>
                      <span className={`py-1 px-2 
                            font-bold text-sm rounded-full 
                            
                            whitespace-nowrap 
                            ${role === 'user' ? '' :
                              role === 'rider' ? ' text-orange-400' : 
                              ' text-green-500'
                            }`
                          }
                        >{role}
                      </span>
                    </td>
                    {
                      role === 'user' ?
                      <td className="px-6 py-4 whitespace-nowrap"><button className='text-white bg-yellow-400 px-4 py-2 font-bold rounded-full' onClick={()=>updateUser('rider',_id)}>Make rider</button></td>
                      :
                      <td></td>
                    }
                    {
                      role !== 'admin' &&
                      <td className="px-6 py-4 whitespace-nowrap"><button className='text-white bg-green-500 px-4 py-2 font-bold rounded-full' onClick={()=>updateUser('admin',_id)}>Make Admin</button></td>
                    }

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      }
      </>
    )
  }
export default Users