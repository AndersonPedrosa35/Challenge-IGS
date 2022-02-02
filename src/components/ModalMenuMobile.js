import React from 'react';
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas } from 'react-bootstrap';
import menu from "../assets/navbar.svg";

export default function ModalMenuMobile() {
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
              <Nav.Link href="">Ajuda</Nav.Link>
              <NavDropdown title="Perfil" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="#action3">Meus rendimentos</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Minha conta</NavDropdown.Item>
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
