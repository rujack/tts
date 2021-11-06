import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeaderComp = () => {
  return (
    <Navbar variant="dark">
      <Container>
        <Nav className="text-start">
          <Link className="nav-link active" to="/">
            Home
          </Link>
        </Nav>
        <Navbar.Brand
          href="/"
          style={{ fontSize: "1.5em", fontWeight: "bold" }}>
          TTS
        </Navbar.Brand>
        <Nav className="text-end">
          <Link className="nav-link active" to="about">
            Team
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default HeaderComp;
