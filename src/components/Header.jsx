import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import "./Vik.css"


const Header = () => {
 
    return(
 
         <>

<Navbar expand="lg" className="bg-body-teritary">
      <Container id='headerback' fluid>
        <Navbar.Brand style={{color:"white"}} href="#home">Inventary Management System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link id='home' href="#home">Home</Nav.Link>
            <Nav.Link href="#link"></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

          
         </>

    )

}

export default Header