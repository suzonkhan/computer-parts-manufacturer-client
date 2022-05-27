import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const AddReview = () => {
    const axios = require("axios").default;
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
      const [user] = useAuthState(auth);
      const onSubmit = (data, event) => {
       const customerReview = {
           ...data,
           customerName: user.displayName,
           customerEmail: user.email 
       }
       console.log(customerReview);
       axios
      .post("http://localhost:5000/review", customerReview)
      .then(function (response) {
        // console.log(response);
        toast("Review added successfully!");
        event.target.reset();
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
              <form onSubmit={handleSubmit(onSubmit)}>
               
                 
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Product Rating</Form.Label>
                  <input
                  type="range"
                  className='form-range'
                  min="0" max="5" step="1"
                    // className="form-control"
                    {...register("productRating", {
                      required: true,
                    })}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Product Review</Form.Label>
                  <Form.Control as="textarea"
                  {...register("productReview", {
                    required: true,
                  })}
                  rows={3} />
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