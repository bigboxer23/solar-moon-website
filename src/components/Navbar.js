import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { MdLogin } from "react-icons/md";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColor, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColor ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className={"d-flex align-items-center me-4"}
        >
          <img src={logo} className="img-fluid logo" alt="brand" />
          <div className={"ms-2 fs-4"}>Solar Moon Analytics</div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto w-100" defaultActiveKey="#home">
            <Nav.Item>
              <NavLink
                to="/docs"
                className={"text-nowrap nav-link"}
                onClick={() => updateExpanded(false)}
              >
                Docs
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to="/pricing"
                className={"text-nowrap nav-link"}
                onClick={() => updateExpanded(false)}
              >
                Pricing
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to="/about"
                className={"text-nowrap nav-link"}
                onClick={() => updateExpanded(false)}
              >
                About
              </NavLink>
            </Nav.Item>
            <div className={"flex-grow-1"}></div>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="https://app.solarmoonanalytics.com"
                onClick={() => updateExpanded(false)}
              >
                Sign up /Sign In
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
