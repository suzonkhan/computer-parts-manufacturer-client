import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
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
              <Link className="nav-link" to="/dashboard/add-review">
                Add Review
              </Link>
              
              { admin && <li><Link to="/dashboard/users">All Users</Link></li>}
              { admin && <li><Link to="/dashboard/add-product">  Add Product</Link></li>}
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
