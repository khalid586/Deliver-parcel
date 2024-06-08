import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import Users from '../../Components/Users';
import Title from '../../Components/Title';

function UsersPage() {


    return (
        <>
            <Title title = "Deliver | All users"></Title>
            <h1 className='text-3xl font-bold text-center my-8 underline'>All Users</h1>
            <Users></Users>
        </>
    )
}

export default UsersPage