import React from 'react'
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import "./GenFooter.css"

const GenFooter = () => {
  return (
    <div className='bottomDiv'>
        
          <h2 class="name-title">JAVIERA LOPEZ</h2>

          <div class="nav-links">
             <NavLink className="navv-link"   to={'/dashboard/knowme'}>KNOW ME •</NavLink>
            <NavLink className="navv-link" to={'/dashboard/seeme'}>SEE ME •</NavLink>
            <NavLink className="navv-link" to={'/dashboard/timetogether'}>TIME TOGETHER •</NavLink>
            <NavLink className="navv-link" to={'/dashboard/surpriseme'}>SURPRISE ME</NavLink>
          </div>

          <div class="social-icons">
            <div class="icon"><PiInstagramLogoFill className='theicon'/></div>
            <div class="icon"><FaXTwitter  className='theicon'/></div>
          </div>

          <footer class="footer">© 2025 JAVIERA LOPEZ</footer>
    </div>
  )
}

export default GenFooter