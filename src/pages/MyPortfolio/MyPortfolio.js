import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const MyPortfolio = () => {
  return (
    <div className="page-block h-100">
      <Container>
        <Row>
          <Col>
            <h2>Abdur Rahman Suzon</h2>
            <p>Email: arsuzon.khan@gmail.com</p>

            <h3 className="mt-3">Education</h3>
            <ul>
              <li>Graduate (2014): National University, Bangladesh.</li>
              <li>
                Higher Secondary (2008): Khoshbush School and College, Barura,
                Cumilla.
              </li>
              <li>
                Secondary School (2006): Moheshpur Aziza High School, Barura,
                Cumilla.
              </li>
            </ul>
            <h3 className="mt-3">Skills</h3>
            <ul class="skill-list">
              <li>Figma</li>
              <li>Adobe XD</li>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Sass</li>
              <li>Less</li>
              <li>Bootstrap</li>
              <li>Tailwind</li>
              <li>JavaScript</li>
              <li>Typescript</li>
              <li>jQuery</li>
              <li>Angular</li>
              <li>Vue.js</li>
              <li>React</li>
              <li>Rest API</li>
              <li>Webpack</li>
              <li>WordPress</li>
              <li>PHP</li>
              <li>MySQL</li>
              <li>Git</li>
            </ul>
            <h3 className="mt-3">Portfolio/Projects</h3>
            <ul>
                <li><a target="_blank" href="https://amadercode.com/">https://amadercode.com/</a></li>
                <li><a target="_blank" href="https://www.shoppingmart.xyz/">https://www.shoppingmart.xyz/</a></li>
                <li><a target="_blank" href="https://tourtoday.com.bd/">https://tourtoday.com.bd/</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyPortfolio;
