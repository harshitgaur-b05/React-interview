import React from 'react'
import UserContext from './Usercontext'
import { useState } from 'react'
const UserContextProvide = ({children}) => {
    const [user,setUser]=useState(null)
  return (
    <div>
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
        
    </div>
  )
}

export default UserContextProvide