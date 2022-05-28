import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="page-block">
      <Container>
        <Row>
          <Col xs={12} sm={4} md={3}>
            <div className="p-4 bg-white">
              <Link className="nav-link" to="/dashboard">
                Profile
              </Link>
              <Link className="nav-link" to="/dashboard/my-orders">
                My Orders
              </Link>
              <Link className="nav-link" to="/dashboard/add-product">
                Add Product
              </Link> 
              <Link className="nav-link" to="/dashboard/add-review">
                Add Review
              </Link>
            </div>
          </Col>

          <Col xs={12} sm={8} md={9}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
