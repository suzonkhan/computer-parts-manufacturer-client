import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import banner from "../../images/banner.jpg";
const Home = () => {
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
        </Container>
      </section>
    </div>
  );
};

export default Home;
