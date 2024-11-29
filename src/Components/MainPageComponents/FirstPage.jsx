import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./../../assets/css/FirstPage.css";
import { useNavigate } from "react-router-dom";

const FirstPage = () => {
  const navigate = useNavigate();
  return (
    <div className="first-page">
      <Container fluid className="text-container">
        <Row className="justify-content-center align-items-center text-center">
          <Col md={8}>
            <h1 className="company-name">Xavics</h1>
            <p className="description">
              At Xavics, we craft digital experiences that transform ideas into reality. Our expertise in web development, mobile solutions, and UI/UX design ensures innovation and excellence in every line of code.
            </p>
            <Button onClick={() => navigate("/contact")} variant="primary" size="lg" className="cta-button">
              Contact Us
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FirstPage;
