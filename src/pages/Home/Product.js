import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {_id, productName, productPhoto, productDescription, productPrice, availableQuantity, minimumQuantity} = product;
    return (
        <Col xs={12} sm={6} md={4}>
            <div className="product-box">
              <div className="product-img">
                <img src={productPhoto} alt="" />
              </div>
              <div className="product-info">
                <h3 className="product-name">{productName}</h3>
                <p className="product-qty">Stock Quantity : {availableQuantity} </p>
               
                <p className="product-desc">
                  {productDescription}
                </p>
                <div className="d-flex justify-content-between">
                  <div>
                    <p className="product-price">Price: {productPrice} Taka</p>
                  </div>
                  <div> 
                  <p>Min Order: {minimumQuantity} </p>
                  </div>
                </div>
                <div className="text-center">
                  {/* <Button variant="info">Manage Stock</Button> */}
                  <Link className='btn btn-outline-primary' to={`/purchase/${_id}`}>Purchase</Link>
                </div>
              </div>
            </div>
          </Col>
    );
};

export default Product;