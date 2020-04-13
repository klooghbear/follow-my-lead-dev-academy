import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar className="nav" light expand="md">
        <NavbarBrand>
          <NavLink>
            <img className="logo" src="/images/Logo2.png" alt="" />
          </NavLink>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link style={{ textDecoration: 'none' }}>
                <Button color="" className="text-white">
                  <h3>Contact</h3>
                </Button>
              </Link>
            </NavItem>
            <NavItem>
              <Link style={{ textDecoration: 'none' }}>
                <Button color="" className="text-white ">
                  <h3>About</h3>
                </Button>
              </Link>
            </NavItem>
            <NavItem>
              <Link style={{ textDecoration: 'none' }}>
                <Button color="" className="text-white ">
                  <h3>Login</h3>
                </Button>
              </Link>
            </NavItem>
            <NavItem>
              <Link style={{ textDecoration: 'none' }}>
                <Button color="" className="text-white ">
                  <h3>Home</h3>
                </Button>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default NavigationBar;
