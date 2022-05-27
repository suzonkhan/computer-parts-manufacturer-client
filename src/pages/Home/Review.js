import React from "react";
import { Col } from "react-bootstrap";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Review = ({ review }) => {
  const { _id, productRating, productReview, customerName, customerEmail } =
    review;
  return (
    <Col xs={12} sm={12} md={6}>
      <div className="review-box">
        <div className="faQuoteLeft">
          <FontAwesomeIcon icon={faQuoteLeft} />
        </div>

        <p>{productReview}</p>
        <div className="mb-2">
          <Rating
            initialRating={productRating}
            emptySymbol={<FontAwesomeIcon icon={faStar} />}
            fullSymbol={
              <FontAwesomeIcon style={{ color: "#f89321" }} icon={faStar} />
            }
            readonly
          ></Rating>
        </div>
        <h5>{customerName}</h5>
      </div>
    </Col>
  );
};

export default Review;
