import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import '../assets/Styles/Navbar.css' 

function NavBar() {
  const [expanded, setExpanded] = useState(false);

  // Reusable link class handler
  const getLinkClass = ({ isActive }) =>
    isActive ? 'nav-link nav-link-focus' : 'nav-link';

  // Handle link click to collapse navbar
  const handleNavClick = () => setExpanded(false);

  return (
    <Navbar
      expand="lg"
      variant="dark"
      className="custom-navbar"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand className="brand-name">JAVIERA LOPEZ</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded((prev) => !prev)}
        />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="nav-links">
            <NavLink to="/dashboard/knowme" className={getLinkClass} onClick={handleNavClick}>
              KNOW ME
            </NavLink>
            <NavLink to="/dashboard/seeme" className={getLinkClass} onClick={handleNavClick}>
              SEE ME
            </NavLink>
            <NavLink to="/dashboard/timetogether" className={getLinkClass} onClick={handleNavClick}>
              TIME TOGETHER
            </NavLink>
            <NavLink to="/dashboard/surpriseme" className={getLinkClass} onClick={handleNavClick}>
              SURPRISE ME
            </NavLink>
          </Nav>
          <Button variant="outline-light" className="book-button" onClick={handleNavClick}>
            <NavLink to="/dashboard/booking" className={getLinkClass}>
              BOOK YOUR EXPERIENCE
            </NavLink>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
