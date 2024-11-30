import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browser from './Browser'
function Body() {
    const appBrowser=createBrowserRouter([
        {
           path:"/",
           element:<Login/>
        },
        {
            path:"/browse",
            element:<Browser/>
        }

    ])
  return (
    <div>
        <RouterProvider router={appBrowser} >
            
        </RouterProvider>
    </div>
  )
}

export default Body