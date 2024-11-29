import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import "./../assets/css/aboutdetailspage.css";
import image1 from "./../assets/images/image1.jpg";
import image2 from "./../assets/images/image2.jpg";
import image3 from "./../assets/images/image1.jpg";

const AboutDetails = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();

  const sections = [
    {
      id: "about-code-innovation",
      title: "About Xavics",
      description:
        "At Xavics, we specialize in crafting cutting-edge digital solutions. From web applications to mobile apps and beyond, we are passionate about innovation and delivering excellence. Our team of expert developers and designers ensures that every project reflects creativity, quality, and functionality.",
      image: image1,
    },
    {
      id: "our-mission",
      title: "Our Mission",
      description:
        "We aim to empower businesses and individuals with exceptional digital products. By harnessing the latest technologies, we build solutions that drive growth and create meaningful impact. Join us in our journey to redefine the future of technology.",
      image: image2,
    },
    {
      id: "why-choose-us",
      title: "Why Choose Us",
      description:
        "We stand out by delivering personalized solutions tailored to meet the unique needs of each client. Our dedication to excellence, creativity, and collaboration ensures that we deliver high-quality results every time. Partner with us to achieve your goals effortlessly.",
      image: image3,
    },
  ];

  const section = sections.find((section) => section.id === id);

  if (!section) {
    return <p>Section not found</p>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="about-details-page"
    >
      <Container>
        <Row className="align-items-center details-section">
          <Col md={6} className="text-center">
            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="details-title"
            >
              {section.title}
            </motion.h2>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="details-description"
            >
              {section.description}
            </motion.p>
          </Col>
          <Col md={6} className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={section.image}
                alt={section.title}
                className="details-image"
                fluid
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default AboutDetails;
