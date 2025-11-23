import React from 'react'
import { useContext } from 'react'
import UserContext from '../store/Usercontext'
import { useState } from 'react'

const Login = () => {
    const [useranem,setUserName]=useState('')
    
    const {setUser}=useContext(UserContext)
  return (
    <div>
        <input type="text" onChange={(e)=>setUserName(e.target.value)} />
        <button onClick={()=>{
            setUser({username:useranem});
        }}>set user name</button>

    </div>
  )
}

export default Login