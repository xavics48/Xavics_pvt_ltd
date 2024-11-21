import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import "./../../assets/css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-top">
          <Col md={4} className="footer-section">
            <h5 className="footer-title">About Us</h5>
            <p>
              We provide innovative solutions to help you succeed in the digital world.
              Your goals are our passion.
            </p>
          </Col>
          <Col md={4} className="footer-section">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/portfolio">Projects</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </Col>
          <Col md={4} className="footer-section">
            <h5 className="footer-title">Connect With Us</h5>
            <div className="footer-social-icons">
              <a href="https://www.facebook.com/profile.php?id=61566743877885&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://www.linkedin.com/company/105459527/admin/page-posts/published/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/codeinovations/profilecard/?igsh=MWJ0ZjZ4YnBnZjloNw==" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="mailto:codeinovations461@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="footer-bottom">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Code Inovations. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
