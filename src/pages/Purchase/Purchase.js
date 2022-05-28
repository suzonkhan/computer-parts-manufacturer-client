import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import './Purchase.css';

const Purchase = () => {
  const [user] = useAuthState(auth);
  const axios = require("axios").default;
  const { id } = useParams();
  //   console.log(id);
  const [product, setProduct] = useState({});
  const [orderQty, setOrderQty] = useState(0);
  const [maxOrderQty, setMaxOrderQty] = useState(0);
  const [minOrderQty, setMinOrderQty] = useState(0);
  useEffect(() => {
    setOrderQty(parseInt(minimumQuantity));
    setMinOrderQty(parseInt(minimumQuantity));
    setMaxOrderQty(parseInt(availableQuantity));
  }, [product]);
  const {
    _id,
    productName,
    productPhoto,
    productDescription,
    productPrice,
    availableQuantity,
    minimumQuantity,
  } = product;

  const increaseQty = () => {
    const newQty = parseInt(orderQty) + 1;
    if (newQty <= maxOrderQty) {
      console.log(newQty);
      setOrderQty(newQty);
    } else {
      alert("Stop!!");
    }
  };
  const decreaseQty = () => {
    const newQty = parseInt(orderQty) - 1;
    if (newQty >= minOrderQty) {
      console.log(newQty);
      setOrderQty(newQty);
    } else {
      alert("Stop!!");
    }
  };
  useEffect(() => {
    axios
      .get(`https://gigabite-manufacturer.herokuapp.com/product/${id}`)
      .then(function (response) {
        setProduct(response.data);
      });
  }, []);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (userInput, event) => {
    // console.log(userInput);
    const orderSummary = {
      ...userInput,
      productID: _id,
      productName,
      productPrice,
      orderQuantity: orderQty,
      productPhoto,
    };
    console.log(orderSummary);
    axios
      .post("https://gigabite-manufacturer.herokuapp.com/order", orderSummary)
      .then(function (response) {
        // console.log(response);
        toast("Order Places successfully!");
        event.target.reset();
        setOrderQty(minimumQuantity);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="page-block">
      <Container>
        <div className="">
          <Row className="">
            <Col xs={12} sm={12} md={6}>
              <div className="product-details">
                <div className="product-photo">
                  <img src={productPhoto} alt="" />
                </div>
                <div className="product-info">
                  <h4>{productName}</h4>
                 
                  <p>{productDescription}</p>
                  <h5>Price : {productPrice} Taka </h5>
                  <p className="product-qty">
                    Stock Quantity : {availableQuantity}{" "}
                  </p>
                  <p className="product-qty">
                    Min Order Quantity : {minimumQuantity}{" "}
                  </p>

                  <InputGroup className="my-5">
                    <Button
                      onClick={decreaseQty}
                      variant="secondary"
                      id="button-addon2"
                    >
                      -
                    </Button>
                    <FormControl type="number" value={orderQty} readOnly />
                    <Button
                      onClick={increaseQty}
                      variant="secondary"
                      id="button-addon2"
                    >
                      +
                    </Button>
                  </InputGroup>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6}>
            <div className="section-heading mb-0">
                <h2> Confirm Purchase</h2>
                <p>Please enter your contact and shipping info.</p>
              </div>
            <form className="purchase-form" onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <input
                  defaultValue={user.displayName}
                  className="form-control"
                  {...register("customerName", {
                    required: true,
                  })}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <input
                  defaultValue={user.email}
                  className="form-control"
                  {...register("customerEmail", {
                    required: true,
                  })}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone</Form.Label>
                <input
                  className="form-control"
                  {...register("customerPhone", {
                    required: true,
                  })}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Address</Form.Label>
                <input
                  className="form-control"
                  {...register("customerAddress", {
                    required: true,
                  })}
                />
              </Form.Group>
              <input className="btn btn-primary w-100 btn-lg" type="submit" value="Purchase" />
            </form>
            </Col>
          </Row>
        </div>
 
      </Container>
    </div>
  );
};

export default Purchase;
