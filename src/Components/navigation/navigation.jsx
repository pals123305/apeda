import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './navigation.css'
import { Link, NavLink } from "react-router-dom";

function Navigation() {
  return (

    //     <Navbar bg="dark" expand="lg" variant='dark'>
    //   <Container>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <NavLink as={NavLink} to='/tracenet'>Certificates</NavLink>
    //       </Nav>
    //     </Navbar.Collapse>
    //     <Navbar.Collapse className="justify-content-end">
    //       <Navbar.Text>
    //         <a href="#login">logout</a>
    //       </Navbar.Text>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>

    <div className="content-wrapper content_head" >
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Tracenet</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Navigation
