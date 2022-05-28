import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useProducts from "../../Hooks/useProducts";
import useReviews from "../../Hooks/useReviews";
import banner from "../../images/banner.jpg";
import partnerBanner from "../../images/partner.png";
import locationBanner from "../../images/location.svg";
import Product from "./Product";
import Review from "./Review";
import {
  faDesktop,
  faLocation,
  faMapMarkedAlt,
  faMapMarkerAlt,
  faSmile,
  faTools,
} from "@fortawesome/free-solid-svg-icons";

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
              <div className="section-heading">
                <h2>New Arrival</h2>
                <p>Solution with innovation</p>
              </div>
            </Col>
          </Row>
          <Row>
            {products.slice(0, 6).map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </Row>
        </Container>
      </section>
      <section className="summary-section">
        <Container>
          <Row>
            <Col xs={6} sm={6} md={3}>
              <div className="summary-box">
                <div>
                  <FontAwesomeIcon icon={faDesktop} />
                </div>
                <div>
                  <h3>1000+</h3>
                  <p>Product</p>
                </div>
              </div>
            </Col>
            <Col xs={6} sm={6} md={3}>
              <div className="summary-box">
                <div>
                  <FontAwesomeIcon icon={faMapMarkedAlt} />
                </div>
                <div>
                  <h3>100+</h3>
                  <p>Country Coverage</p>
                </div>
              </div>
            </Col>
            <Col xs={6} sm={6} md={3}>
              <div className="summary-box">
                <div>
                  <FontAwesomeIcon icon={faTools} />
                </div>
                <div>
                  {" "}
                  <h3>985960+</h3>
                  <p>Service Center</p>
                </div>
              </div>
            </Col>
            <Col xs={6} sm={6} md={3}>
              <div className="summary-box">
                <div>
                  <FontAwesomeIcon icon={faSmile} />
                </div>
                <div>
                  <h3>120M+</h3>
                  <p>Customer Review</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="block-section">
        <Container>
          <Row>
            <Col>
              <div className="section-heading">
                <h2>Customer Review</h2>
                <p>Every words are valuable</p>
              </div>
            </Col>
          </Row>
          <Row>
            {reviews.slice(0, 6).map((review) => (
              <Review key={review._id} review={review}></Review>
            ))}
          </Row>
        </Container>
      </section>
      <section className="block-section bg-white">
        <Container>
          <Row>
            <Col  xs={12} sm={12} md={6}>
              <img src={partnerBanner} alt="" />
            </Col>
            <Col  xs={12} sm={12} md={6}>
              <div className="section-heading text-start">
                <h2>Become a Partner</h2>
                <p>Change your life with Gigabite</p>
              </div>
              <p className="lead">
                Gigabite LLC doing business scinc 1950. Within this successfully
                jurnay we are doing business into 100+ country and have 1000m+
                customer into diffrent country. Everyday Gigabite increasing his
                bussiness and trast amount this customers{" "}
              </p>

              <p className="lead">
                {" "}
                If you want to do ratil business with Gigabite LLC then please
                contact with our county/region office for more information. We
                are also lookig for ounsource service center for your customer
                and vandors.{" "}
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="block-section">
        <Container>
          <Row>
            <Col>
              <div className="section-heading">
                <h2>Nearest Store</h2>
                <p>Buy Gigabite product form your nearest point.</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col  xs={12} sm={12} md={6}>
              <div className="store-location">
                <div>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div>
                  <h4>Rafid Computers</h4>
                  <p>
                    Address: Shop no 50, Block C, 2nd Floor, City Center, Dhaka
                    -1020{" "}
                  </p>
                  <p>Mobile: 0168574281</p>
                  <p>Email: sales@rafidcomputers.com</p>
                  <p>Website: www.rafidcomputers.com</p> 
                </div>
              </div>
              <div className="store-location">
                <div>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div>
                  <h4>Rafid Computers</h4>
                  <p>
                    Address: Shop no 50, Block C, 2nd Floor, City Center, Dhaka
                    -1020{" "}
                  </p>
                  <p>Mobile: 0168574281</p>
                  <p>Email: sales@rafidcomputers.com</p>
                  <p>Website: www.rafidcomputers.com</p> 
                </div>
              </div>
            </Col>
            <Col  xs={12} sm={12} md={6}>
              <img src={locationBanner} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
