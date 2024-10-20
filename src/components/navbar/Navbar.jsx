import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/img/logo.svg';
import { FaUser, FaShoppingCart, FaHeart } from 'react-icons/fa';


function NavbarComponent() {

  const isLoggedIn =  localStorage.getItem('isLoggedIn');
  const handleLogout = () => {
    // Supprimer l'état de connexion dans le local storage
    localStorage.removeItem('isLoggedIn');
    alert("Déconnexion réussie !");
    // Redirige ou met à jour l'état de l'application ici si nécessaire
  };

  console.log('isLoggedIn', isLoggedIn)
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
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
              {isLoggedIn == null && <NavDropdown.Item href="/register">S'inscrire</NavDropdown.Item>}
              {isLoggedIn == null &&     <NavDropdown.Item href="/login">Se connecter</NavDropdown.Item>}
              {isLoggedIn == null && <NavDropdown.Divider />}
              {isLoggedIn && <NavDropdown.Item onClick={handleLogout}>Déconnexion</NavDropdown.Item> }
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;