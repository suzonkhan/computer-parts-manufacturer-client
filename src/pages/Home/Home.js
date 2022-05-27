import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useProducts from "../../Hooks/useProducts";
import useReviews from "../../Hooks/useReviews";
import banner from "../../images/banner.jpg";
import Product from "./Product";
import Review from "./Review";
const Home = () => {
    const [products, setProducts] = useProducts();
    const [reviews, setReviews] = useReviews();
  return (
    <div>
      <section className="block-section text-center bg-white">
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
      <section className=" block-section">
        <Container>
          <Row>
            <Col>
              <h2>I am boot</h2>
            </Col>
          </Row>
          <Row>
          {reviews.slice(0, 6).map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
