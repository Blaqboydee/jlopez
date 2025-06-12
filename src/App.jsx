import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import MainPage from './Pages/MainPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import KnowMe from './Pages/KnowMe';
import NavBar from './Components/Navbar';
import Dashboard from './Pages/Dashboard';
import Seeme from './Pages/Seeme';
import Timetogether from './Pages/Timetogether';
import Surpriseme from './Pages/Surpriseme';
import GenFooter from './Components/GenFooter';
import BookingForm from './Pages/BookingForm';
import useRouteVisibility from "./hooks/useRouteVisibilty";

function App() {
  const { shouldDisplayNavBar, shouldHaveGenFooter } = useRouteVisibility();
  
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