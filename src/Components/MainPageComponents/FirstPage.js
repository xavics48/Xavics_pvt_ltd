// FirstPage.jsx
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./../../assets/css/FirstPage.css";

const FirstPage = () => {
  return (
    <div className="first-page">
      <Container fluid className="text-container">
        <Row className="justify-content-center align-items-center text-center">
          <Col md={8}>
            <h1 className="company-name">Code Inovation</h1>
            <p className="description">
              At Code Inovation, we craft digital experiences that transform ideas into reality. Our expertise in web development, mobile solutions, and UI/UX design ensures innovation and excellence in every line of code.
            </p>
            <Button variant="primary" size="lg" className="cta-button">
              Contact Us
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FirstPage;
