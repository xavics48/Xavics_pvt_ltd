import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./../../assets/css/aboutus.css";
import image1 from "./../../assets/images/image1.jpg";
import image2 from "./../../assets/images/image2.jpg";
import image3 from "./../../assets/images/image1.jpg";

const Aboutus = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const sections = [
    {
      id: "about-code-innovation",
      title: "About Xavics",
      description:
        "At Xavics, we specialize in crafting cutting-edge digital solutions. From web applications to mobile apps and beyond, we are passionate about innovation and delivering excellence. Our team of expert developers and designers ensures that every project reflects creativity, quality, and functionality.",
      image: image1,
      imageFirst: false,
    },
    {
      id: "our-mission",
      title: "Our Mission",
      description:
        "We aim to empower businesses and individuals with exceptional digital products. By harnessing the latest technologies, we build solutions that drive growth and create meaningful impact. Join us in our journey to redefine the future of technology.",
      image: image2,
      imageFirst: true,
    },
    {
      id: "why-choose-us",
      title: "Why Choose Us",
      description:
        "We stand out by delivering personalized solutions tailored to meet the unique needs of each client. Our dedication to excellence, creativity, and collaboration ensures that we deliver high-quality results every time. Partner with us to achieve your goals effortlessly.",
      image: image3,
      imageFirst: false,
    },
  ];

  const handleLearnMore = (id) => {
    navigate(`/about-details/${id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="about-us-page"
    >
      <Container>
        {sections.map((section, index) => (
          <Row
            className={`align-items-center section ${
              section.imageFirst ? "flex-row-reverse" : ""
            }`}
            key={index}
          >
            {/* Text Section */}
            <Col md={6} >
              <motion.h2
                className="section-title text-center"
                initial={{ x: section.imageFirst ? 100 : -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {section.title}
              </motion.h2>

              <motion.p
                className="section-description"
                initial={{ x: section.imageFirst ? 100 : -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {section.description}
              </motion.p>
              <div className="text-center">
    <Button className="cta-button" onClick={() => handleLearnMore(section.id)}>
      Learn More
    </Button>
  </div>
           
            </Col>

            {/* Image Section */}
            <Col md={6}>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Image
                  src={section.image}
                  alt={section.title}
                  className="about-image"
                  fluid
                />
              </motion.div>
            </Col>
          </Row>
        ))}
      </Container>
    </motion.div>
  );
};

export default Aboutus;
