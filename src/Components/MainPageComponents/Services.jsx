import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "./../../assets/css/services.css";

import WebDevSVG from "./../../assets/images/ecommerce.webp";
import AppDevSVG from "./../../assets/images/website.webp";
import UiUxSVG from "./../../assets/images/website.webp";
import EcommerceSVG from "./../../assets/images/website.webp";

const services = [
  {
    title: "Web Development",
    image: WebDevSVG,
    description: "Building responsive, fast, and secure websites tailored to your needs.",
  },
  {
    title: "App Development",
    image: AppDevSVG,
    description: "Creating robust mobile applications for Android and iOS platforms.",
  },
  {
    title: "UI/UX Design",
    image: UiUxSVG,
    description: "Designing stunning and user-friendly interfaces for web and mobile apps.",
  },
  {
    title: "E-Commerce Websites",
    image: EcommerceSVG,
    description: "Developing feature-rich online stores that drive sales",
  },
];

const cardVariants = {
  hiddenLeft: { x: -100, opacity: 0 },
  hiddenRight: { x: 100, opacity: 0 },
  centerHidden: { scale: 0.5, opacity: 0 },
  visible: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="services-page"
    >
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <motion.h2
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="services-title"
            >
              Our Services
            </motion.h2>
            <p className="services-description">
              Explore our wide range of professional services designed to
              transform your ideas into reality.
            </p>
          </Col>
        </Row>
        <Row>
          {services.map((service, index) => {
            let initial;
            let delay = 0;

            if (index === 0) {
              initial = "hiddenLeft";
            } else if (index === 3) {
              initial = "hiddenRight";
            } else {
              initial = "centerHidden";
              delay = 0.5;
            }

            return (
              <Col md={6} lg={3} key={index} className="mb-4">
                <motion.div
                  initial={initial}
                  whileInView="visible"
                  variants={cardVariants}
                  transition={{ duration: 0.2, delay }}
                  viewport={{ once: true, amount: 0.4 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="service-card">
                      <Card.Body className="text-center">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="service-image"
                        />
                        <Card.Title className="service-title">
                          {service.title}
                        </Card.Title>
                        <Card.Text className="service-description">
                          {service.description}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </motion.div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </motion.div>
  );
};

export default Services;
