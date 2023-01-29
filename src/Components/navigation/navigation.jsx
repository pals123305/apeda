import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './navigation.css'
import { NavLink } from "react-router-dom";

function Navigation() {
    return (

        <Navbar bg="dark" expand="lg" variant='dark'>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink as={NavLink} to='/tracenet'>Certificates</NavLink>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="#login">logout</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Navigation
