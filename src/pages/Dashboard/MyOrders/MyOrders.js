import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import "./MyOrders.css";
const MyOrders = () => {
  const axios = require("axios").default;
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const { displayName, email } = user;
  useEffect(() => {
    axios
      .get(`http://localhost:5000/orders?email=${email}`, {
        // headers: {
        //   authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        // },
      })

      .then(function (response) {
        setOrders(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  const handlePayment = (orderID) => {  
      const paymentInfo = {
          payment: true
      }
      axios
      .put(`http://localhost:5000/order/payment/${orderID}`, paymentInfo)
      .then(function (response) { 
        toast("Payment added successfully!"); 
      })
      .catch(function (error) {
        console.log(error);
      }); 
  }
  const handleDeleteOrder = (orderID) => {
    axios
    .delete(`http://localhost:5000/order/delete/${orderID}`)
    .then(function (response) { 
      toast("Deleted added successfully!"); 
    })
    .catch(function (error) {
      console.log(error);
    }); 
  }
  return (
    <div className="page-block">
      <Container>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Customer</th>
                  <th>Product </th>
                  <th>Order </th>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, key) => (
                  <tr key={order._id}>
                    <td>{key + 1}</td>

                    <td>
                      <p>Customer Name:{order.customerName}</p>
                      <p>Customer Email: {order.customerEmail}</p>
                      <p>Customer Phone: {order.customerPhone}</p>
                    </td>
                    <td>
                      <div className="product-image">
                        <img src={order.productPhoto} alt="" />
                        <p>Product Name:{order.productName}</p>
                        <p>Product Price: {order.productPrice}</p>
                      </div>
                    </td>
                    <td>
                      <p>Order Qty: {order.orderQuantity}</p>
                      <p>Total Price: { parseInt(order.orderQuantity) * parseInt(order.productPrice)}</p>
                    </td>
                    <td>
                      {!order?.payment &&   <Button className="m-2"
                        variant="primary"
                        onClick={() => handlePayment(order._id)}
                      >
                        Pay Now 
                      </Button>}
                   

                      <Button className="m-2"
                        variant="danger"
                        onClick={() => handleDeleteOrder(order._id)}
                      >
                        Cancel 
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyOrders;
