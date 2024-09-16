import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import './MyNavbar.css';

function MyNavbar() {
  const expand = "md";
  return (
    <Navbar key={expand} style={{backgroundColor:'#ccc'}} expand={expand} className="mb-3">
      <Container fluid>
        <Navbar.Brand className="fs-4" href="#">Blog Project</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
            Blog Project
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavLink className='nav-link' to='/'>Home</NavLink>
              <NavLink className='nav-link' to='/add-article'>create Article</NavLink>
              <NavLink className='nav-link' to='/about'>About</NavLink>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
