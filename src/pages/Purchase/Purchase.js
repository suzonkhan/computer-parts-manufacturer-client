import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Col, Container, InputGroup, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const Purchase = () => {
  const axios = require("axios").default;
  const { id } = useParams();
  //   console.log(id);
  const [product, setProduct] = useState({});
  const {
    _id,
    productName,
    productPhoto,
    productDescription,
    productPrice,
    availableQuantity,
    minimumQuantity,
  } = product;
  useEffect(() => {
    axios.get(`http://localhost:5000/product/${id}`).then(function (response) {
      setProduct(response.data);
    });
  }, []);
  return (
    <div className="page-block">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={6}>
            <img src={productPhoto} alt="" />
          </Col>
          <Col xs={12} sm={12} md={6}>
            <h2>{productName}</h2>
            <p className="product-qty">Stock Quantity : {availableQuantity} </p>
            <p>{productDescription}</p>
            <h5>Price : {productPrice} Taka </h5>

            <p className="product-qty">
              Min Order Quantity : {minimumQuantity}{" "}
            </p>
            {/* <Button onClick={delivered}>Delivered</Button> */}
            {/* <form className="add-stock-form" onSubmit={addStock}>
              <InputGroup className="my-5">
                <FormControl
                  placeholder="Add stock"
                  aria-label="Add stock"
                  aria-describedby="basic-addon2"
                  name="stock"
                  type="number"
                  required
                />
                <Button type="submit" variant="secondary" id="button-addon2">
                  Add Stock
                </Button>
              </InputGroup>
            </form> */}
            <Link className="btn btn-info" to="/manage-inventories">
              {" "}
              Manage Inventories{" "}
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
          
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Purchase;
