// AboutUs.jsx
import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "./../../assets/css/aboutus.css";
import image1 from './../../assets/images/image1.jpg';
import image2 from './../../assets/images/image2.jpg';
const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="about-us-page"
    >
      <Container>
        <Row className="align-items-center section">
          <Col md={6} className="text-center">
            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="section-title"
            >
              About Code Inovation
            </motion.h2>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="section-description"
            >
              At Code Inovation, we specialize in crafting cutting-edge digital
              solutions. From web applications to mobile apps and beyond, we
              are passionate about innovation and delivering excellence. Our
              team of expert developers and designers ensures that every project
              reflects creativity, quality, and functionality.
            </motion.p>
            <Button variant="primary" className="cta-button">
              Learn More
            </Button>
          </Col>
          <Col md={6} className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={image1}
                alt="About Us"
                className="about-image"
                fluid
              />
            </motion.div>
          </Col>
        </Row>

        <Row className="align-items-center section">
          <Col md={6} className="text-center order-md-2">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={image2}
                alt="Innovation"
                className="about-image"
                fluid
              />
            </motion.div>
          </Col>
          <Col md={6} className="text-center">
            <motion.h2
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="section-title"
            >
              Our Mission
            </motion.h2>
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="section-description"
            >
              We aim to empower businesses and individuals with exceptional
              digital products. By harnessing the latest technologies, we build
              solutions that drive growth and create meaningful impact. Join us
              in our journey to redefine the future of technology.
            </motion.p>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default AboutUs;
