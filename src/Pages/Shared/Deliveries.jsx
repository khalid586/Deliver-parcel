import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../Providers/UserProvider'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Orders from '../../Components/Orders';

function Deliveries() {
    const {currUser,fetching} = useContext(UserContext);
    const [deliveries,setDeliveries] = useState([]);
    
    const {email} = useParams();
    useEffect(()=>{
        if(!fetching){
            if(currUser.role === 'admin'){
                    axios.get(`http://localhost:5007/deliveries`)
                    .then(({data})=>{
                        console.log(data);
                        setDeliveries(data);
                    })
            }else{
                axios.get(`http://localhost:5007/deliveries/${email}`)
                .then(({data})=>{
                    console.log(data);
                    setDeliveries(data);
                })
            }
        }
    },[fetching])

    return (
        <div>
            <Orders orders={deliveries}></Orders>
        </div>
    )
}

export default Deliveries