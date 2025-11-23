import React from 'react'
import { useContext } from 'react'
import UserContext from '../store/Usercontext'

const Display = () => {
 const {user}=useContext(UserContext)
    return (
    <div>
      {user&&<div>{user.username}</div>}  
    </div>
  )
}

export default Display