import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../Providers/AuthProvider';
import Spinner from '../../Components/Spinner';
import { Helmet } from 'react-helmet';
import { UserContext } from '../../Providers/UserProvider';
import Swal from 'sweetalert2';


function ProfilePage() {
    const {user,loading,logOut} = useContext(AuthContext);
    const [imgAvailable,setImgAvailable] = useState(true);
    const [url,setUrl]= useState('');
    const [invalidImage,setInvalidImage] = useState(false);
    const {currUser,fetching} = useContext(UserContext);

    useEffect(()=>{
        if(user.photoURL){
            setUrl(user?.photoURL);
            setInvalidImage(false);
        }
    },[loading,user])

    function defaultImage(){
        if(!loading){            
            setInvalidImage(true);
            setUrl('https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1715904000&semt=ais_user')
        }
    }

    function handleError(){
        setImgAvailable(false);
    }

    function handleLogout(){
        Swal.fire({
            title: "Are you sure you want to logout?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!"
          }).then((result) => {
                if(result.isConfirmed) {
                    toast.success('Logged out successfully')
                    setTimeout(()=>{
                        logOut();
                    },1700)   
                }
            }); 
    }

    return(
        <div>
        <Helmet>
            <title>Deliver | User profile</title>
        </Helmet>
        {
            loading ? <Spinner></Spinner> : 
            <div >
                {
                    user ? 
                    <div className=' m-4 rounded-2xl text-center my-8'>
                            <div className='flex justify-center'>
                                <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <div class="flex flex-col items-center py-10 pt-14">
                                            <p className='relative'>
                                                <img onError={defaultImage} class="bg-white w-24  h-24 mb-3 rounded-full border-4 border-green-500 shadow-lg" src={url} alt="User"/>
                                                {
                                                   invalidImage && <sup className='absolute w-5/6 font-semibold text-xs text-white bg-red-500  p-1  rounded-full mx-2 '>Invalid URL </sup>
                                                }
                                            </p>
                                            {
                                                !fetching && currUser.role != 'null' &&
                                                <p className={`text-white text-sm ${currUser.role === 'user' ? "bg-gray-400": currUser.role === 'admin'? "bg-green-500":"bg-yellow-500"} font-bold px-2 py-0.5 rounded-xl`}>{currUser.role}</p>
                                            }
                                            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.displayName}</h5>
                                            <span class="text-sm text-gray-500 dark:text-gray-400">{user.email}</span>
                                            <div class="flex">
                                                {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
                                                <a href="#" class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</a> */}
                                            </div>
                                        </div>
                                        <button className='mb-8 btn bg-red-500 border-none text-white hover:text-red-500' onClick={handleLogout}> Logout</button>
                                </div>
                            </div>
                    </div> 
                    
                    :

                    <p><Navigate to = '/'></Navigate></p>
                }
            </div>
        }
        <ToastContainer></ToastContainer>

        </div>
    )
}

export default ProfilePage