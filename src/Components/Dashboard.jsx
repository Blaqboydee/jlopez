import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './Navbar'

const Dashboard = () => {
  return (
      <div>
        <div>
         <NavBar/>
        
        <div className=''>
            <Outlet/>
        </div>
        </div>
    </div>
  )
}

export default Dashboard