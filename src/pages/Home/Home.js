import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useProducts from "../../Hooks/useProducts";
import banner from "../../images/banner.jpg";
import Product from "./Product";
const Home = () => {
    const [products, setProducts] = useProducts();
  return (
    <div>
      <section className="block-section text-center">
        <Container>
          <img src={banner} alt="" />
        </Container>
      </section>
      <section className=" block-section">
        <Container>
          <Row>
            <Col>
              <h2>I am boot</h2>
            </Col>
          </Row>
          <Row>
          {products.slice(0, 6).map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
