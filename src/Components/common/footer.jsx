import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { 
  FaFacebook, 
  FaLinkedin, 
  FaInstagram, 
  FaTwitter, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaGlobe 
} from "react-icons/fa";
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
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/Privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/Terms">Terms & Conditions</a>
              </li>
              <li>
                <a href="/ServiceReturnPolicy">Service & Refund Policy</a>
              </li>
            </ul>
          </Col>
          <Col md={4} className="footer-section">
            <h5 className="footer-title">Connect With Us</h5>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <a 
                  href="https://maps.google.com?q=Chandni+Chok,Rawalakot,Azad+Kashmir,Pakistan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Chandni Chowk, Rawalakot, Azad Kashmir, Pakistan
                </a>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <a href="tel:+923461553264">+92 346 1553264</a>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <a href="mailto:xavics48@gmail.com">xavics48@gmail.com</a>
              </div>
              <div className="contact-item">
                <FaGlobe className="contact-icon" />
                <a href="https://www.xavics.com" target="_blank" rel="noopener noreferrer">www.xavics.com</a>
              </div>
            </div>
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
              <a href="mailto:xavics48@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="footer-bottom">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Xavics. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;