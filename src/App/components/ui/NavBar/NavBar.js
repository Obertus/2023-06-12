import React from 'react'
import PropTypes from 'prop-types'
import style from './NavBar.module.css'
import { Navbar, Nav, Container } from 'react-bootstrap'
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.css'
//facultatif si non utilisations des js de botsstrap
// import '../../../../../node_modules/bootstrap/dist/js/bootstrap.js'

const NavBar = (props) => {
  return (
    <div className={style.NavBar} data-testid="NavBar">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

NavBar.propTypes = {
  // children: PropTypes.any.isRequired,
}

export default NavBar