import React from 'react'
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import "../assets/Styles/GenFooter.css"

const GenFooter = () => {
  return (
    <div className='bottomDiv'>
        
          <h2 className="name-title">JAVIERA LOPEZ</h2>

          <div className="nav-links">
             <NavLink className="navv-link"   to={'/dashboard/knowme'}>KNOW ME •</NavLink>
            <NavLink className="navv-link" to={'/dashboard/seeme'}>SEE ME •</NavLink>
            <NavLink className="navv-link" to={'/dashboard/timetogether'}>TIME TOGETHER •</NavLink>
            <NavLink className="navv-link" to={'/dashboard/surpriseme'}>SURPRISE ME</NavLink>
          </div>

          <div className="social-icons">
            <div className="icon"><PiInstagramLogoFill className='theicon'/></div>
            <div className="icon"><FaXTwitter  className='theicon'/></div>
          </div>

          <footer className="footer">© 2025 JAVIERA LOPEZ</footer>
    </div>
  )
}

export default GenFooter