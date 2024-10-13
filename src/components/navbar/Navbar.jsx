import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../logo.svg';
import { FaUser, FaShoppingCart, FaHeart } from 'react-icons/fa';


function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                width="60"
                height="60"
                className="d-inline-block align-top"
                alt=""
              />
            </Navbar.Brand>
          </Container>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">A Propos</Nav.Link>

          </Nav>
          <Nav>
          <Nav.Link eventKey={2} href="/favorites">
              <FaHeart size={24} color='red'/>
            </Nav.Link>
            <Nav.Link eventKey={2} href="/cart">
              <FaShoppingCart size={24} color='gray'/>
            </Nav.Link>
            <NavDropdown
              title={<FaUser size={24} color='gray' />} 
              id="icon-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">S'inscrire</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Se connecter</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Déconnexion</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;