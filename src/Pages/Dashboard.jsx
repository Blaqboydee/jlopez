import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Components/Navbar'
import ScrollToTop from '../Components/ScrollToTop'

const Dashboard = () => {
  return (
      <div>
        <div>
         <NavBar/>
        
        <div className=''>
          <ScrollToTop/>
            <Outlet/>
        </div>
        </div>
    </div>
  )
}

export default Dashboard