import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Collapse, Navbar, NavbarToggler, Nav } from "reactstrap"

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <Navbar className="nav" light expand="md">
        <Link to="/">
          <img className="logo" src="/images/Logo2.png" alt="" />
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen}>
          <Nav className="mr-auto" navbar>
            <Link to="/contact">
              Contact
            </Link>
            <Link to="/about">
              About
            </Link>
            <Link to="/login">
              Login
            </Link>
            <Link to="/">
              Home
            </Link>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  )
}

export default NavigationBar
