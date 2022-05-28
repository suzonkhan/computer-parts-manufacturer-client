import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L4Jd2CR2z1RyTJvOFwu50nC3A1vjs2nSkbDwZUtlNJTQaSjA5QaR1bthN4AGlzsr1QsfxLIuTEHztW3GUbZNYrX00zwy7osxZ"
);
const Payment = () => {
  const axios = require("axios").default;
  const { id } = useParams();
  const [order, setOrder] = useState({});
  useEffect(() => {
    axios
      .get(`https://gigabite-manufacturer.herokuapp.com/order/${id}`)
      .then(function (response) {
        setOrder(response.data);
      });
  }, []);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Row className="align-items-center">
                  <Col>
                    <Card.Img variant="top" src={order.productPhoto} />
                  </Col>
                  <Col>
                    <Card.Title>{order.productName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Price: {order.productPrice}
                    </Card.Subtitle>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="mt-5">
              <Card.Body>
                <Elements stripe={stripePromise}>
                  <CheckoutForm />
                </Elements>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Payment;
