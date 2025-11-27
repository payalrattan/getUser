import React, { useState,useEffect } from 'react'
import PropTypes from 'prop-types'
import { getUser } from '../../api/getUser'
import User from './User'
const Users = () => {
const[users,setUsers]=useState([]);

useEffect(()=>{
const fetchUsers = async()=>{
    try{
    const data = await getUser();
    setUsers(data);
        console.log(data);
        
  }
  catch(err)
  {
    console.log(err);
  }
}
  fetchUsers();
},[])
  
return (
  <div>
    {users.length>0?(
        <ul>
            {users.map(user=><User key ={user.id} user={user}/>)}
        </ul>
    ):(<p>No user exist</p>)}
  </div>
  )
    
  }
Users.propTypes = {}

export default Users;