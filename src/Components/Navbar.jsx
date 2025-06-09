import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import './NavBar.css'; // for custom styles

function NavBar() {
  return (
    <Navbar expand="lg" variant="dark" className="custom-navbar">
      <Container>
        <Navbar.Brand className="brand-name">JAVIERA LOPEZ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="nav-links">
            <NavLink className={({isActive}) => isActive? "nav-link nav-link-focus" : "nav-link"}   to={'/dashboard/knowme'}>KNOW ME</NavLink>
            <NavLink className={({isActive}) => isActive? "nav-link nav-link-focus" : "nav-link"}  to={'/dashboard/seeme'}>SEE ME</NavLink>
            <NavLink className={({isActive}) => isActive? "nav-link nav-link-focus" : "nav-link"}  to={'/dashboard/timetogether'}>TIME TOGETHER</NavLink>
            <NavLink className={({isActive}) => isActive? "nav-link nav-link-focus" : "nav-link"}  to={'/dashboard/surpriseme'}>SURPRISE ME</NavLink>
          </Nav>
          <Button variant="outline-light" className="book-button">
            <NavLink className={({isActive}) => isActive? "nav-link" : "nav-link"}  to={'/dashboard/booking'}>BOOK YOUR EXPERIENCE </NavLink>
            
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;