import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const AddReview = () => {
  const axios = require("axios").default;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [user] = useAuthState(auth);
  const [starRating, setStarRating] = useState(0);

  const onSubmit = (data, event) => {
    const customerReview = {
      ...data,
      productRating: starRating,
      customerName: user.displayName,
      customerEmail: user.email,
    };
    console.log(customerReview);
    axios
      .post("https://gigabite-manufacturer.herokuapp.com/review", customerReview)
      .then(function (response) {
        // console.log(response);
        toast("Review added successfully!");
        event.target.reset();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="page-block">
      <Container>
        <Row>
          <Col>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3 d-flex">
                <div className="me-3">Select Rating</div>
                <div><Rating
                emptySymbol={<FontAwesomeIcon icon={faStar} size="2x" />}
                fullSymbol={
                  <FontAwesomeIcon style={{ color: "#f89321" }} icon={faStar} size="2x" />
                }
                onClick={(rate) => setStarRating(rate)}
              ></Rating></div>
              
                </div> 
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product Review</Form.Label>
                <Form.Control
                  as="textarea"
                  {...register("productReview", {
                    required: true,
                  })}
                  rows={3}
                />
              </Form.Group>

              <input type="submit" />
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddReview;
