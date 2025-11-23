import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './MainLayout'
import Home from './Home'
import About from './About'
import User from './User'
const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>
        ,children:[
            {
                path:'/',
                element:<Home/>
            },
              {
                path:'/about',
                element:<About/>
            },
            {
                path:'/user/:id',
                element:<User/>
            }
        ]

    },{
        
    },{

    },{

    }
])

export default appRouter