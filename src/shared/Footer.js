import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light" variant="dark">
      <Container>
        <Row className="py-5">
          <Col xs={12} sm={6} md={3}>
            <div className="widget">
              <h4>Gigabite</h4>
              <p>Computer parts manufacturer</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3}>
          <div className="widget">
              <h4>Customer Dashboard</h4>
             <ul>
                 <li>
                     <Link to="/my-orders">My Orders</Link>
                 </li>
                 <li>
                     <Link to="/add-review">Add A Review</Link>
                 </li>
                 <li>
                     <Link to="/my-profile">My Profile</Link>
                 </li>
             </ul>
            </div>
          </Col>
        </Row>
        <Row className="py-4 border-top">
          <Col>
            <p className="my-0">
              Copyright &copy;2022 Gigabite - Computer Parts Manufacturer
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
