import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import MainPage from './MainPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import KnowMe from './KnowMe';
import NavBar from './Navbar';
import Dashboard from './Dashboard';
import Seeme from './Seeme';
import Timetogether from './Timetogether';
import Surpriseme from './Surpriseme';
import GenFooter from './GenFooter';
import BookingForm from './BookingForm';

const App = () => {
     const location = useLocation();
 
   
  
  const knownRoutes = ["/knowme"]
  const shouldDisplayNavBar = knownRoutes.includes(location.pathname)

  const haveGenFooter = ['/dashboard', '/dashboard/knowme', '/dashboard/seeme', '/dashboard/timetogether', '/dashboard/surpriseme', '/dashboard/booking'  ]
  const shouldHaveGenFooter = haveGenFooter.includes(location.pathname)
  return (
    <>
     {shouldDisplayNavBar && <NavBar/>}
  <Routes>
        
    <Route path='/' element={<MainPage/>}/>
   
    <Route path='/dashboard' element={<Dashboard/>}>
      <Route index element={<KnowMe/>} />
      <Route path='/dashboard/knowme' element={<KnowMe/>} />
      <Route path='/dashboard/seeme' element={<Seeme/>} />
      <Route path='/dashboard/timetogether' element={<Timetogether/>} />
      <Route path='/dashboard/surpriseme' element={<Surpriseme/>} />
      <Route path='/dashboard/booking' element={<BookingForm/>}/>
    </Route>


    </Routes>
    {shouldHaveGenFooter && <GenFooter/>}  
    </>
  
       
  
  )
}

export default App