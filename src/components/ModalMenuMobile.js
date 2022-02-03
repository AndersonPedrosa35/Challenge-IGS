import React, { useContext } from 'react';
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Context } from '../contexts/Context';

export default function ModalMenuMobile() {
  const { setIsHelp } = useContext(Context);

  return (
    <Navbar bg="light" expand="sm">
      <Container fluid>
        <Navbar.Toggle aria-controls="offcanvasNavbar" className='header-container-left'/>
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">GamesPoint</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link>
                <span
                  role="button"
                  onClick={ () => setIsHelp(true) }
                >
                  Ajuda
                </span>
              </Nav.Link>
              <NavDropdown title="Perfil" id="offcanvasNavbarDropdown">
                <NavDropdown.Item>
                  <Link to="/perfil">
                    Minha conta
                  </Link> 
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  Muito obrigado pela preferência
                </NavDropdown.Item>
                <NavDropdown.Item>
                  By ©AndersonTech
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
