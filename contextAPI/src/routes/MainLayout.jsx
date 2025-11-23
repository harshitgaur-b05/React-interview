import React from 'react'
import { Outlet ,NavLink} from 'react-router-dom'
const MainLayout = () => {
  return (
    <div>
        <div>
            <ul>
                <li><NavLink to='/'>HOME</NavLink></li>
                <li><NavLink to='/about'>About</NavLink> </li>
                <li><NavLink to='/user/:id'>User</NavLink></li>
                <li><NavLink to='/pr'>ProctoredRoute</NavLink></li>
            </ul>
            <Outlet/>
        </div>
    </div>
  )
}

export default MainLayout