import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const axios = require("axios").default;

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, event) => {
  
    axios
      .post("https://gigabite-manufacturer.herokuapp.com/product", data)
      .then(function (response) {
        // console.log(response);
        toast("Product added successfully!");
        event.target.reset();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product Name</Form.Label>
                <input
                  className="form-control"
                  {...register("productName", {
                    required: true,
                  })}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product Price</Form.Label>
                <input
                  className="form-control"
                  {...register("productPrice", {
                    required: true,
                  })}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product Description</Form.Label>
                <input
                  className="form-control"
                  {...register("productDescription", {
                    required: true,
                  })}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product image</Form.Label>
                <input
                  className="form-control"
                  {...register("productPhoto", {
                    required: true,
                  })}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Minimum order quantity</Form.Label>
                <input
                  className="form-control"
                  {...register("minimumQuantity", {
                    required: true,
                  })}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Available quantity</Form.Label>
                <input
                  className="form-control"
                  {...register("availableQuantity", {
                    required: true,
                  })}
                />
              </Form.Group>

              <input className="btn btn-primary btn-lg w-100" type="submit" />
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddProduct;
