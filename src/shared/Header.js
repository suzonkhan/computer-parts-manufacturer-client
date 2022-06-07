import { signOut } from "firebase/auth";
import React from "react";
import {
  Button,
  Col,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.init";
import logo from "../images/logo.png";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <nav className="custom-navbar">
      <Container>
        <div className="navbar-inner">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="menu-bar">
            <ul>
              <li>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/portfolio">
                  My Portfolio
                </Link>
              </li>
              {user ? (
                <li>
                  <Link className="nav-link" to="#">
                    Hi,{user.displayName}
                  </Link>
                  <ul>
                    <li> 
                      <a href="#" onClick={() => signOut(auth)}> Signout </a>
                    </li>
                    <li>
                      <Link className="nav-link" to="/dashboard">
                        Dashboard
                      </Link>
                    </li>
                  </ul>
                </li>
              ) : (
                <li>
                  {" "}
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              )}
              <li></li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
