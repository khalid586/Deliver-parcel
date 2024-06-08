import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Users() {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
      axios.get('https://b9a12-server-side-khalid586.vercel.app/users')
      .then(({data})=>setUsers(data))
      .catch(err=>console.log(err))
  },[])

  console.log(users)
    return (
      <div>
      {
        users.map(user => <p>{user.name}</p>)
      }
      </div>
  )
}

export default Users