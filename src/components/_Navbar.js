import React from 'react'
import Container from 'react-bootstrap/Container';
import { propTypes } from 'react-bootstrap/esm/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function _Navbar(props) {
    return (
      <div>
        <Navbar bg="dark" variant = "dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">{props.aboutText}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    )
}

_Navbar.protoTypes = {
    title : propTypes.string,
    aboutText : propTypes.string
}

_Navbar.defaultProps = {
    title: 'set title here',
    aboutText: 'set about here'
}
