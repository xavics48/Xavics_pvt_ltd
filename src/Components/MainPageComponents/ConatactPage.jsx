import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaWhatsapp, FaEnvelope, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./../../assets/css/contact.css";

const ContactPage = () => {
  return (
    <Container className="contact-page mt-5">
      <Row className="justify-content-center text-center">
        <Col md={8}>
          <h1 className="mb-4">Contact Me</h1>
          <p className="text-muted mb-5">
            I’d love to hear from you! Feel free to reach out through the methods below or connect with me on social media.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} lg={4} className="text-center">
          <Button
            variant="outline-success"
            className="contact-btn mb-3"
            href="https://wa.me/+923160854067"
            target="_blank"
          >
            <FaWhatsapp className="me-2" /> WhatsApp Me
          </Button>
          <Button
            variant="outline-primary"
            className="contact-btn mb-3"
            href="mailto:codeinovations461@gmail.com"
          >
            <FaEnvelope className="me-2" /> Email Me
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col md={6} lg={4} className="text-center">
          <div className="social-icons">
            <a
              href="https://www.facebook.com/profile.php?id=61566743877885&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/company/105459527/admin/page-posts/published/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/codeinovations/profilecard/?igsh=MWJ0ZjZ4YnBnZjloNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaInstagram />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
