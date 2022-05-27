import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">Gigabite</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              Link
            </Link>
            <Link className="nav-link" to="/purchase"> 
            Purchase 
            </Link>
            <Link className="nav-link" to="/add-product"> 
            AddProduct 
            </Link>
          </Nav>
          {user ? (
            <Button onClick={()=>signOut(auth)} variant="outline-light">Hi,{user.displayName} Logout</Button>
          ) : (
            <Link className="btn btn-outline-light" to="/login">
              Login
            </Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
