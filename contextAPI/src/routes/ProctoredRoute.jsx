import React from 'react'
import Login from '../component/Login'

const ProctoredRoute = ({childern}) => {
    const auth=localStorage.getItem('token')
    return auth?{childern}:<Login/>
}

export default ProctoredRoute