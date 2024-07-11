import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const CustomHeader = () => {
  return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Greeshma Nerella</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="me-auto">
              <Nav.Link href="/">Projects</Nav.Link>
              <Nav.Link href="/aboutme">About Me</Nav.Link>
              <Nav.Link href="/Greeshma_Nerella.pdf" target="_blank" rel="noopener noreferrer">Resume</Nav.Link>
              <Nav.Link href="/contactme">Contact Me</Nav.Link>
            </Nav> 
          </Navbar.Collapse> 
        </Container>
      </Navbar>
  )
}

export default CustomHeader
