import React, { useState } from "react"
import Container from "react-bootstrap/Container"
import { Navbar, Nav } from "react-bootstrap"
import NavbarStyles from "../styles/modules/navbar.module.scss"
import { Link } from "gatsby"
import Image from "./Image"

const AppNavbar = () => {
  const [extraNav, setExtraNav] = useState(false)

  const onToggle = () => {
    setExtraNav(!extraNav)
  }

  return (
    <>
      <Navbar
        className={`${NavbarStyles.navbar} d-flex flex-column`}
        expand="md"
        onToggle={onToggle}
      >
        <Container>
          <Navbar.Brand className={NavbarStyles.logo} href="/">
            <Image filename="logo.png" alt="Dakahlia STEM School" />
          </Navbar.Brand>
          <Navbar.Toggle
            className={NavbarStyles.toggler}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav" className="flex-column">
            <Nav className={`ml-auto ${NavbarStyles.nav}`}>
              <Link to="/" className={NavbarStyles.link}>
                News & Media
              </Link>
              <Link to="/" className={NavbarStyles.link}>
                Directory
              </Link>
              <Link to="/" className={NavbarStyles.link}>
                Alumni
              </Link>
              <Link to="/" className={NavbarStyles.link}>
                Parents
              </Link>
              <Link to="/" className={NavbarStyles.link}>
                Calender
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>

        <div className={`w-100`}>
          <Nav
            className={`${NavbarStyles.extraNav} ${
              extraNav ? NavbarStyles.extraNavToggled : ""
            }`}
          >
            <Link to="/" className={`${NavbarStyles.linkSub}`}>
              About Us
            </Link>
            <Link to="/" className={`${NavbarStyles.linkSub}`}>
              Admission
            </Link>
            <Link to="/" className={`${NavbarStyles.linkSub}`}>
              Academics
            </Link>
            <Link to="/" className={`${NavbarStyles.linkSub}`}>
              Arts
            </Link>
            <Link to="/" className={`${NavbarStyles.linkSub}`}>
              Athletics
            </Link>
            <Link to="/" className={`${NavbarStyles.linkSub}`}>
              Campus Life
            </Link>
          </Nav>
        </div>
      </Navbar>
    </>
  )
}

export default AppNavbar
