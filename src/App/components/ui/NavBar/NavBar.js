// import PropTypes from 'prop-types'
import { Container, Nav, Navbar } from 'react-bootstrap'
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.css'
import style from './NavBar.module.css'
//facultatif si non utilisation des js de botsstrap
// import '../../../../../node_modules/bootstrap/dist/js/bootstrap.js'
import { LinkContainer } from "react-router-bootstrap"

const NavBar = (props) => {
  return (
    <div className={style.NavBar} data-testid="NavBar">
      <Navbar bg="primary" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand href="/">Home</Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <LinkContainer to='/thumbnail'>
              <Nav.Link href='/thumbnail'>Thumbnail</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/meme'>
              <Nav.Link href='/meme'>New</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/meme/1'>
              <Nav.Link href='/meme/1'>editor id1</Nav.Link>
            </LinkContainer>


            {/* <Nav.Link href="#thumbnail">Thumbnail</Nav.Link> */}
            {/* <Nav.Link href="#newmem">New mem</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

// NavBar.propTypes = {
//   // children: PropTypes.any.isRequired,
// }

export default NavBar